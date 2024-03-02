import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = (e) => setMatches(e.matches);

    setMatches(media.matches);

    const addEventListenerSupported =
      typeof media.addEventListener === "function";

    if (addEventListenerSupported) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if (addEventListenerSupported) {
        media.removeEventListener("change", handleChange);
      } else {
        // Fallback for older browsers
        media.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
