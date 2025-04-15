"use client";

import { useEffect } from "react";
const useCounter = (
  count: number,
  countFunc: React.Dispatch<React.SetStateAction<number>>,
  countTo: number
) => {
  useEffect(() => {
    if (count >= countTo) {
      return;
    }

    const interval = setInterval(() => {
      countFunc((prevTotal) => prevTotal + 1);
    }, 250);

    return () => clearInterval(interval);
  }, [count, countFunc, countTo]);
};

export default useCounter;
