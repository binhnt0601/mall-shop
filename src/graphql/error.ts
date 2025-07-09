import { onError } from "apollo-link-error";

import { toast } from "@/helpers/toast";

export const ErrorLink = onError(({ graphQLErrors, networkError }) => {
  try {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error({ message, locations, path });
        if (message === "Error, Unverified account") {
          window.localStorage.clear();
          if (window?.location?.pathname !== "/") {
            window.location.assign("/");
          }
        } else {
          toast.error(message);
        }
      });
    }

    if (networkError) {
      console.log("🚀 ~ ErrorLink ~ networkError:", networkError);
      toast.error(`[Network error]: ${networkError.message || networkError}`);
    }
  } catch (error) {
    console.error("ErrorLink caught an error:", error);
    toast.error("System error! Please try again later.");
  }
});
