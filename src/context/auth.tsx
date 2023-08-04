import { router, useRootNavigationState, useSegments } from 'expo-router';
import React from 'react';

const AuthContext = React.createContext<{ setAuthRes?: Function, authRes?: any }>({});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
export function useProtectedRoute(authRes: any) {
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();

  React.useEffect(() => {
    // Only when navigation ready
    if (!rootNavigationState?.key) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!authRes && !inAuthGroup) {
      // Redirect to the passcode auth page.
      router.replace('/');
    } else if (authRes?.success && inAuthGroup) {
      // Redirect away from the passcode auth page.
      router.replace('/Todo');
    }
  }, [authRes, segments]);
}

export function Provider(props: any) {
  const [authRes, setAuthRes] = React.useState<any>(null);

  useProtectedRoute(authRes);

  return (
    <AuthContext.Provider
      value={{
        setAuthRes,
        authRes,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
