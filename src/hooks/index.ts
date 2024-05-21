import { useState } from 'react';

export const useExample = () => {
  const [data, setData] = useState();

  const getData = () => ({
    type: 'example',
    data: data,
  });

  return { getData, setData };
};
