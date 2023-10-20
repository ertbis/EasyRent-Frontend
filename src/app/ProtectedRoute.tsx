import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { UserType } from '@/types/types';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
  const loggedInUser = useSelector((state: { loggedInUser: UserType | null }) => state.loggedInUser);
  const router = useRouter();

  if (!loggedInUser) {
    router.push('/login');
    return null;
  }

  if (!allowedRoles.includes(loggedInUser.role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
