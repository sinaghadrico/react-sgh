/* eslint-disable prettier/prettier */
import { useEffect} from 'react';

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClose = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    window.addEventListener('mousedown', handleClose);
    window.addEventListener('touchstart', handleClose);
    return () => {
      window.removeEventListener('mousedown', handleClose);
      window.removeEventListener('touchstart', handleClose);
    };
  }, [handler, ref]);
};

export default useClickOutside;
