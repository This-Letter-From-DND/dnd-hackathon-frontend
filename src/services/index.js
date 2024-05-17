import { getFetch, postFetch } from './common';

export const getTestApi = async () => {
  return getFetch('/v1/user/test/get');
};

export const postTestApi = async (data) => {
  return postFetch('/v1/user/test/save', data);
};
