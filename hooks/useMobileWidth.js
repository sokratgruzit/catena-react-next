import { useState, useEffect } from "react";

<<<<<<< HEAD
const getWidth = () => {
  if (typeof window !== "undefined") {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  }
};

export const useMobileWidth = () => {
  let [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000,
  );
=======
const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const useMobileWidth = () => {
  let [width, setWidth] = useState(getWidth());
>>>>>>> 67a54795795783c45dad7c618fd42212c64834e9

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
<<<<<<< HEAD
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resizeListener);
      }
    };
  }, []);

  return { width };
=======
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  let mobile = false;

  if (width <= 1300) {
    mobile = true;
  }

  return { mobile, width };
>>>>>>> 67a54795795783c45dad7c618fd42212c64834e9
};
