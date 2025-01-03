'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { useStore } from '../store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { setSession } from '@/utils/utils';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const user = useStore((state) => state.user);
  const message = useStore((state) => state.message);
  const errorMessage = useStore((state) => state.errorMessage);

  React.useEffect(() => {
    if (user) {
      setSession(user?.token);
    }
  }, [user]);

  React.useEffect(() => {
    if (message) {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    }
  }, [message]);

  React.useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    }
  }, [errorMessage]);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      <ToastContainer />
    </NextUIProvider>
  );
}
