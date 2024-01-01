import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getToken, getUser } from '../../utils/auth';

export const useOTPConfirm = () => {
  const user = getUser();

  useEffect(() => {
    if (user.emailVerified == true) {
      return
    }else if(user.emailVerified == false){        
        window.location.replace("/verifyotp");
      return
    }else{
        return
    }

  
  }, [user ]);

  return user;
};
