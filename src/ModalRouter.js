import React, { useState } from 'react';
import ModalRouterContext from './context';

function ModalRouter(props) {
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
