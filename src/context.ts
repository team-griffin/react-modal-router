import { createContext } from 'react';

export type ModalRouterContextValue = {
  path: string | null,
  params: Object | null,
  actions: {
    setPath: (path: string | null) => void,
    setParams: (params: Object) => void,
    closeModal: () => void,
  },
};

const ModalRouterContext = createContext<ModalRouterContextValue>(undefined);

export default ModalRouterContext;
