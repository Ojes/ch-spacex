import { useRef } from 'react';

export function useDebounce(callback, timeout = 300) {
  let timerId;
  const controller = useRef({
    clear() {
      clearTimeout(timerId);
    },
    onChange(...args) {
      controller.current.clear();
      timerId = setTimeout(() => callback(...args), timeout);
    },
  });

  return {
    ...controller.current,
  };
}
