import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getToken, getUser } from '../../utils/auth';

export const useProtectedRoute = (allowedRoles: string[]) => {
  const user = getUser();
  const token = getToken()
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      window.location.replace("/login");
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      window.location.replace("/unauthorized");
    }
  }, [user, allowedRoles, router]);

  return user;
};
