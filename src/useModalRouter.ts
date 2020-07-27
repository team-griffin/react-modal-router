import { useContext } from 'react';
import ModalRouterContext from './context';

export default function useModalRouter() {
  return useContext(ModalRouterContext);
}
