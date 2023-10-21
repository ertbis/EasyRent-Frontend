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
      router.push('/login');
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      router.push('/unauthorized'); // You can customize this route or behavior
    }
  }, [user, allowedRoles, router]);

  return user;
};
