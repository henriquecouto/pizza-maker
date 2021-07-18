import { useEffect, useState } from 'react';
import { Size, SizeName } from 'entities/Size';
// eslint-disable-next-line no-restricted-imports
import sizesMock from 'mocks/pizzas/sizes';

export const usePizzaSizes = () => {
  const [sizes, setSizes] = useState<Array<Size>>();

  useEffect(() => {
    setSizes(
      sizesMock?.map(
        (size) => new Size({ ...size, name: size.name as SizeName })
      )
    );
  }, []);

  return { sizes };
};
