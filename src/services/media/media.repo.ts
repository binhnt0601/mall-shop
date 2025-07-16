import { ApolloClient, InMemoryCache, MutationOptions } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

import { CrudRepository } from "@/graphql/repo/crud";

import { MediaFields } from "./media.field";
import { Media } from "./media.model";

const publicUri = process.env.NEXT_PUBLIC_API_URI;
const uri = `${publicUri}/graphql`;

const client = new ApolloClient({
  link: createUploadLink({ uri }) as any,
  cache: new InMemoryCache(),
});

export class MediaRepository extends CrudRepository<Media> {
  apiName = "Media";

  shortFragment = this.parseFragment(`
      ${MediaFields}
    `);

  fullFragment = this.parseFragment(`
      ${MediaFields}
    `);

  async uploadImage({
    file,
    oldAvatarUrl,
  }: {
    file: any;
    oldAvatarUrl: string;
  }) {
    const api = "uploadImage";
    const option: MutationOptions = {
      mutation: this.gql`
          mutation UploadImage($file: Upload!, $oldAvatarUrl: String) {
            ${api}(file: $file, oldAvatarUrl: $oldAvatarUrl) {
              url
            }
          }
        `,
      variables: {
        file,
        oldAvatarUrl,
      },
    };

    const result = await client.mutate(option);

    this.handleError(result);

    return result.data[api];
  }
}

export const mediaService = new MediaRepository();
