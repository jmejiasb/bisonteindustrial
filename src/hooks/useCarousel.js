import { useEffect, useState } from "react";
export function useCarousel({
  itemCount,
  interval = 5000,
}) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % itemCount);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + itemCount) % itemCount);
  };

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [itemCount, interval]);

  return { index, next, prev };
}
