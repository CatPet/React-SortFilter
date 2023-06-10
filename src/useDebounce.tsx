import { useCallback, useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

// export const useDebounceFunction = (func: any, delay: number) => {
//   const newFunc = useCallback(
//     (...args) => {
//       const timeoutId = setTimeout(() => {
//         func.apply(this, args);
//       }, delay);
//       return () => clearTimeout(timeoutId);
//     },
//     [func, delay]
//   );

//   console.log("debounce");
//   return newFunc;
// };

export default useDebounce;
