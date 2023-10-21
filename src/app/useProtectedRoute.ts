import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { UserType } from '@/types/types';
import { getUser } from '../../utils/auth';

export const useProtectedRoute = (allowedRoles: string[]) => {
  const user = getUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      router.push('/unauthorized'); // You can customize this route or behavior
    }
  }, [user, allowedRoles, router]);

  return user;
};
