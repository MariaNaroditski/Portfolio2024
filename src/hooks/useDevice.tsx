import { useEffect, useState } from "react";

const useDevice = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isSmallDevice = {
    tabletAndMobile: width <= 992,
    desktopAndLaptop: width <= 1200,
  };

  return isSmallDevice;
};

export default useDevice;
