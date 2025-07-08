import { gql, MutationOptions, QueryOptions } from '@apollo/client/core';
import md5 from 'md5';

import { paymentFields, userFields, userQuery } from './user.field';
import { User } from './user.model';

import { CrudRepository } from '@/graphql/repo/crud';

export class UserRepository extends CrudRepository<User> {
  apiName = 'User';

  shortFragment = this.parseFragment(`
    ${userFields}
  `);
  fullFragment = this.parseFragment(`
    ${userFields}
    payment ${paymentFields}
  `);

  referralFragment = this.parseFragment(`
    referrals {
      _id
      countReferrence
      email
      role
      name
      phone
      address
      lastLoginAt
      activeAt
      status
      isFirstLogin
      createdAt
      updatedAt
      referralCode
      referrenceId
      level
      sold
      usdt
      usd
      vnd
    }
    referredByChain {
      _id
      countReferrence
      email
      role
      name
      phone
      address
      lastLoginAt
      activeAt
      status
      isFirstLogin
      createdAt
      updatedAt
      referralCode
      referrenceId
      level
      sold
      usdt
      usd
      vnd
    }
  `);

  async signInUserByEmail(email: string, password: string) {
    const api = 'signInUserByEmail';

    const option: MutationOptions = {
      mutation: gql`
        mutation {
          ${api}(email: "${email}") {
            user { ${userQuery} }
            token
          }
        }
      `,
    };

    option.context = { headers: { 'y-token': md5(password) } };

    const result = await this.apollo.mutate(option);

    this.handleError(result);

    return result.data[api] as {
      user: User;
      token: string;
    };
  }

  async updatePassword({
    currentPassword,
    newPassword,
  }: {
    currentPassword: string;
    newPassword: string;
  }) {
    const api = 'updatePassword';

    currentPassword = md5(currentPassword);
    const option: MutationOptions = {
      mutation: gql`
        mutation {
          ${api}(
            currentPassword: "${currentPassword}",
            newPassword: "${newPassword}"
          ) {
            ${userQuery}
          }
        }
      `,
      variables: {
        newPassword,
        currentPassword,
      },
    };

    const result = await this.apollo.mutate(option);

    this.handleError(result);

    return result.data[api] as {
      success: boolean;
      message: string;
    };
  }

  async resetPassword({ email }: { email?: string }) {
    const api = 'resetPassword';

    const option: MutationOptions = {
      mutation: gql`
        mutation {
          ${api}(
            email: "${email}"
          ) {
            success
            message
          }
        }
      `,
      variables: {
        email,
      },
    };

    const result = await this.apollo.mutate(option);

    this.handleError(result);

    return result.data[api] as {
      success: boolean;
      message: string;
    };
  }

  async verifyResetCode({ email, code }: { email: string; code: string }) {
    const api = 'verifyResetCode';

    const option: MutationOptions = {
      mutation: gql`
        mutation {
          ${api}(
            email: "${email}",
            code: "${code}"
          ) {
            success
            message
          }
        }
      `,
      variables: {
        email,
        code,
      },
    };

    const result = await this.apollo.mutate(option);

    this.handleError(result);

    return result.data[api] as {
      success: boolean;
      message: string;
    };
  }

  async confirmPasswordReset({
    email,
    code,
    newPassword,
  }: {
    email: string;
    code: string;
    newPassword: string;
  }) {
    const api = 'confirmPasswordReset';

    const option: MutationOptions = {
      mutation: gql`
        mutation {
          ${api}(
            email: "${email}",
            code: "${code}",
            newPassword: "${newPassword}"
          ) {
            success
            message
          }
        }
      `,
      variables: {
        email,
        code,
        newPassword,
      },
    };

    const result = await this.apollo.mutate(option);

    this.handleError(result);

    return result.data[api] as {
      success: boolean;
      message: string;
    };
  }

  async userGetMe(token?: string) {
    const api = 'userGetMe';
    const option: QueryOptions = {
      query: gql`query {  ${api} { ${this.fullFragment} }}`,
    };

    if (token) option.context = { headers: { 'x-token': token } };

    return await this.apollo.query(option);
  }

  async uploadImage(file: any, collectionFolder: string, client: any) {
    const api = 'uploadImage';

    const option: MutationOptions = {
      mutation: gql`
            mutation uploadFile($file: Upload!, $collectionFolder: CollectionFolders!) {
                ${api}(file: $file, collectionFolder: $collectionFolder) {
                    url
                }
            }
        `,
      variables: {
        file: file,
        collectionFolder: collectionFolder,
      },
    };

    const result = await client.mutate(option);

    this.handleError(result);

    return result.data[api];
  }

  async getReferralTree(getReferralTreeId?: string) {
    const api = 'getReferralTree';

    const option: QueryOptions = {
      query: this.gql`
        query getReferralTree($getReferralTreeId: ID) {
          ${api}(id: $getReferralTreeId) {
            ${this.referralFragment}
          }
        }
      `,
      fetchPolicy: 'no-cache',
      variables: {
        getReferralTreeId,
      },
    };

    const result = await this.apollo.query(option);

    this.handleError(result);

    const {
      referrals,
      referredByChain,
    }: {
      referrals: User[];
      referredByChain: User[];
    } = result.data[api];

    return [
      ...referrals.map((r) => ({ ...r, id: r._id, source: 'downline' })),
      ...referredByChain.map((r) => ({ ...r, id: r._id, source: 'upline' })),
    ];
  }
}

export const UserService = new UserRepository();
