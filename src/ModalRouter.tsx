import React, { useState, ReactNode, useMemo, useCallback } from 'react';
import { ModalRouterProvider } from './context';

export type ModalRouterProps = {
  children: ReactNode,
};

function ModalRouter(props: ModalRouterProps) {
  const [ path, setPath ] = useState(null);
  const [ params, setParams ] = useState(null);
  const closeModal = useCallback(() => {
    setPath(null);
  }, [ setPath ])
  const state = useMemo(() => ({
    path,
    params,
  }), [ path, params ]);
  const actions = useMemo(() => ({
    setPath,
    setParams,
    closeModal,
  }), [ setPath, setParams, closeModal ])
  const value = useMemo(() => ({
    state,
    actions,
  }), [ state, actions ]);

  return (
    <ModalRouterProvider value={value}>
      {props.children}
    </ModalRouterProvider>
  );
}

export default ModalRouter;
