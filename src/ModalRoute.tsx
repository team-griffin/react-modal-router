import React, { useContext, Fragment, ReactElement } from 'react';
import ModalRouterContext from './context';
import type { ModalRouterContextValue } from './context';

type ModalRouteProps = {
  path: string,
  render: (x: { router: ModalRouterContextValue }) => ReactElement,
};

function shouldRender(router: ModalRouterContextValue, props: ModalRouteProps) {
  if (router.path == null) {
    return false;
  }

  if (router.path === props.path) {
    return true;
  }

  return false;
}

function ModalRoute(props: ModalRouteProps) {
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