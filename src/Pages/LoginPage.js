import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// Sign-in function
const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function LoginPage() {
  // Define providers array inside the component
  const providers = [
    { id: 'github', name: 'GitHub' },
    { id: 'google', name: 'Google' },
    { id: 'credentials', name: 'Email and Password' },
  ];

  // Detect system color mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
  );
}
