import React, { useContext, Fragment } from 'react';
import ModalRouterContext from './context';

function shouldRender(router, props) {
  if (router.path == null) {
    return false;
  }

  if (router.path === props.path) {
    return true;
  }

  return false;
}

function ModalRoute(props) {
  const router = useContext(ModalRouterContext);

  const canRender = shouldRender(router, props);

  if (canRender === false) {
    return null;
  }

  return (
    <Fragment>
      {props.render({
        router,
      })}
    </Fragment>
  );
}

export default ModalRoute;