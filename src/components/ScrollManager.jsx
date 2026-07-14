import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Static HTML pages get "scroll to top on navigation" and "scroll to #anchor"
 * for free from the browser. A React SPA does neither automatically, so this
 * replicates both: on every route change, scroll to the element matching the
 * URL hash (e.g. /rooms#stable), or to the top of the page if there's no hash.
 */
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait a tick for the new page's DOM to actually be present.
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}
