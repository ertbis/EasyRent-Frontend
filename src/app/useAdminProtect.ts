import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getToken, getUser } from '../../utils/auth';

export const useAdminProtect = () => {
  const user = getUser();
  const token = getToken()
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      window.location.replace("/admin/login");
      return;
    }

  
  }, [user, router]);

  return user;
};
