'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { useLoader } from './loading-provider';

import { User } from '../services/user/user.model';
import { UserService } from '../services/user/user.repo';

import { toast } from '@/helpers/toast';
import { ClearAuthToken, GetAuthToken, SetAuthToken } from '@/graphql/auth';

export enum AuthStatuses {
  NEW = 'NEW',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

const AuthContext = createContext<
  Partial<{
    authStatus: AuthStatuses;
    loadProfile: () => void;
    login: any;
    logout: () => void;
    auth?: User;
  }>
>({});

const AuthProvider = (props: any) => {
  const [authStatus, setAuthStatus] = useState<AuthStatuses>(AuthStatuses.NEW);
  const [auth, setAuth] = useState<User>();
  const { setLoading } = useLoader();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      setAuthStatus(AuthStatuses.LOADING);
      const token = GetAuthToken();

      if (token) {
        const result = await UserService.userGetMe(token);
        console.log('🚀 ~ loadProfile ~ result:', result);

        setAuth(result.data.userGetMe);
      }
      setLoading(false);
      setAuthStatus(AuthStatuses.LOADED);
    } catch (error) {
      console.log(error);
      setLoading(false);
      logout();
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setAuthStatus(AuthStatuses.LOADING);
      const result = await UserService.signInUserByEmail(email, password);
      const { token } = result;

      SetAuthToken(token);

      // Load profile để check isFirstLogin
      const profileResult = await UserService.userGetMe();
      const user = profileResult.data.userGetMe;

      setAuth(user);

      if (user?.isFirstLogin) {
        // Lưu tạm thời credentials cho first login
        localStorage.setItem(
          'temp_login_credentials',
          JSON.stringify({ email, password }),
        );
        window.location.assign('/first-login');
      } else {
        window.location.assign('/dashboard');
      }

      toast.success('Login successfully');
      setLoading(false);
      setAuthStatus(AuthStatuses.LOADED);
    } catch (error: any) {
      setLoading(false);
      setAuthStatus(AuthStatuses.LOADED);
      toast.error(error?.message ?? 'Login failed');
    }
  };

  const logout = () => {
    // ClearAuthToken();
    // window.location.assign('/');
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        authStatus,
        login,
        logout,
        loadProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
