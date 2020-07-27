import React, { useState, ReactElement } from 'react';
import ModalRouterContext from './context';

export type ModalRouterProps = {
  children: ReactElement,
};

function ModalRouter(props: ModalRouterProps) {
  const [ path, setPath ] = useState(null);
  const [ params, setParams ] = useState(null);

  function closeModal() {
    setPath(null);
  }

  return (
    <ModalRouterContext.Provider value={{
      path,
      params,
      actions: {
        setPath,
        setParams,
        closeModal
      },
    }}>
      {props.children}
    </ModalRouterContext.Provider>
  );
}

export default ModalRouter;
