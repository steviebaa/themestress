import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!query) return null;

    const onChange = (mq: MediaQueryListEvent) => setMatches(mq.matches);

    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    mql.addEventListener('change', onChange);

    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
