import useModalRouter from './useModalRouter';

export default <T extends { [key: string]: any }>() => useModalRouter().state.params as T;
