import { useEffect, useState } from 'react';

export const useObservable = (observable) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const subscription = observable.subscribe(setValue);

    return () => subscription.unsubscribe();
  }, [observable]);

  return value;
};
