import { useEffect } from "react";

export const useClickOutside = (
  callback: () => void,
  ref: React.RefObject<HTMLElement | HTMLDivElement> | null,
  ignoredElements?: (string | HTMLElement | null)[],
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref?.current &&
        !ref.current.contains(event.target as Node) &&
        !ignoredElements?.some((element) => {
          if (element === null) return false;
          if (typeof element === "string") {
            return (event.target as HTMLElement).classList.contains(element);
          } else {
            return element.contains(event.target as Node);
          }
        })
      ) {
        callback();
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback, ref, ignoredElements]);

  return;
};
