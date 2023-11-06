import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}
/**
 * This is a custom React hook that returns the current window size.
 * @returns {object} windowSize
 * @example
 * const windowSize = useWindowSize();
 * OR
 * const { width, height } = useWindowSize();
 */
export default function useWindowSize(): WindowSize {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
