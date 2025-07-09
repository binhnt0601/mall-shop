import { parse, ParsedQs } from "qs";

export function parsedQueryString(search?: string): ParsedQs {
  if (!search) {
    if (typeof window !== "undefined") {
      const s = window.location.search;

      search = s.substring(s.indexOf("?"));
    }
    // react-router-dom places search string in the hash
  }

  return search && search.length > 1
    ? parse(search, { parseArrays: false, ignoreQueryPrefix: true })
    : {};
}
