import { User } from "@/services/user/user.model";

export enum AuthStatuses {
  NEW = "NEW",
  LOADING = "LOADING",
  LOADED = "LOADED",
}

export interface AuthState {
  authStatus: AuthStatuses;
  auth?: User;
  loading: boolean;

  loadProfile: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}
