import useParams from './useParams';

export default <T = any>(key: string) => {
  return useParams<{ [key: string]: T }>()?.[key];
};
