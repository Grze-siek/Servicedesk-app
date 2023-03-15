import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useAuthStatus() {
  const [loggedIn, setLoggesIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setLoggesIn(true);
    } else {
      setLoggesIn(false);
    }
    setCheckingStatus(false);
  }, [user]);

  return { loggedIn, checkingStatus };
}
