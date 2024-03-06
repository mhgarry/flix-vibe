import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Modern browsers support addEventListener on MediaQueryList.
    mediaQueryList.addEventListener
      ? mediaQueryList.addEventListener("change", documentChangeHandler)
      : mediaQueryList.addListener(documentChangeHandler); // Fallback for older browsers

    return () => {
      // Remove the event listener on cleanup
      mediaQueryList.removeEventListener
        ? mediaQueryList.removeEventListener("change", documentChangeHandler)
        : mediaQueryList.removeListener(documentChangeHandler); // Fallback for older browsers
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
