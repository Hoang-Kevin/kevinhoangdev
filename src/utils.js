import { useEffect, useRef } from "react";

export const ComponentDidMount = handler => {
  return useEffect(() => {
    return handler();
  }, []);
};

export const ComponentDidUpdate = (handler, deps) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      return;
    }

    return handler();
  }, deps);
};