import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { UserType } from '@/types/types';
import { getUser } from '../../utils/auth';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
     const user = getUser()
       
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  if (!allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
