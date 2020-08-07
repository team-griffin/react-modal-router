import { useCallback } from 'react';
import useModalRouter from './useModalRouter';

export default () => {
  const router = useModalRouter();
  return useCallback((path: string, params?: object) => {
    router.actions.setPath(path);
    router.actions.setParams(params);
  }, [ router ]);
};
