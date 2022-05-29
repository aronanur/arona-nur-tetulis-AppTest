import { useContext } from 'react';
import { ToastContext } from '../context/toastContext';

const useToastHooks = () => {
  return useContext(ToastContext);
}

export default useToastHooks;