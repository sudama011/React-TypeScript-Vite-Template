import { RefObject, useEffect } from "react";

type Callback = () => void;

/**
 * This is a custom React hook that triggers a callback function when a click event occurs outside of the specified element.
 * It uses the useEffect hook from React to manage the event listener.
 * @param ref A React ref object that points to the element that the event listener should be attached to.
 * @param callback A callback function that is triggered when a click event occurs outside of the specified element.
 * @returns void
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => {
 *  console.log("Clicked outside of element!");
 * });
 * <div ref={ref}>Click outside of this element to trigger the callback function.</div>
 */

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: Callback
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
