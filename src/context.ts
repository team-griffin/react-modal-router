import { createContext } from 'react';

export type ModalRouterContextValue = {
  state: {
    path: string | null,
    params: { [key: string]: any } | null,
  },
  actions: {
    setPath: (path: string | null) => void,
    setParams: (params: object) => void,
    closeModal: () => void,
  },
};

export const ModalRouterContext = createContext<ModalRouterContextValue>(undefined);

export const ModalRouterProvider = ModalRouterContext.Provider;

export default ModalRouterContext;
