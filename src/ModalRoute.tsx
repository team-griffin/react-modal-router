import React, { useMemo, Fragment, ReactElement } from 'react';
import type { ModalRouterContextValue } from './context';
import useModalRouter from './useModalRouter';

type ModalRouteProps = {
  path: string,
  render: (props: { router: ModalRouterContextValue }) => ReactElement,
};

function shouldRender(router: ModalRouterContextValue, props: ModalRouteProps) {
  if (router.state.path == null) {
    return false;
  }

  if (router.state.path === props.path) {
    return true;
  }

  return false;
}

function ModalRoute(props: ModalRouteProps) {
  const router = useModalRouter();

  const canRender = useMemo(() => {
    return shouldRender(router, props);
  }, [ router.state.path, props.path ]);

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
