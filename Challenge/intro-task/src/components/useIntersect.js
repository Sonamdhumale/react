import { useEffect, useRef, useState } from "react";

const useIntersect = (
  callback,
  { root = null, rootMargin = "0%", threshold = 0 }
) => {
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(callback, { root, rootMargin, threshold })
  );

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();
    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode];
};

export default useIntersect;
