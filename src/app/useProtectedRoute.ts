import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { redirect, useRouter } from 'next/navigation';
import { UserType } from '@/types/types';
import { getToken, getUser } from '../../utils/auth';

import useSWR from 'swr';

export const useProtectedRoute = (allowedRoles: string[]) => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR('/api/user', fetchUser); // Adjust the API route URL and fetch function

  // Fetch user data using SWR
  const { data: token, error: tokenError } = useSWR('/api/token', fetchToken); // Adjust the API route URL and fetch function

  if (userError || tokenError) {
    router.push('/login');
    return null;
  }

  if (!user || !token) {
    return null; // or show a loading indicator
  }

  if (!allowedRoles.includes(user.role)) {
    router.push('/unauthorized');
    return null;
  }

  return user;
};

// Define your fetch functions (fetchUser and fetchToken) to retrieve data from cookies or wherever you store them.

// Example fetchUser function (modify it to suit your authentication method)
async function fetchUser() {
  const user = getUser(); // Retrieve user data from your method (e.g., cookies)
  return user;
}

// Example fetchToken function (modify it to suit your authentication method)
async function fetchToken() {
  const token = getToken(); // Retrieve token data from your method (e.g., cookies)
  return token;
}
