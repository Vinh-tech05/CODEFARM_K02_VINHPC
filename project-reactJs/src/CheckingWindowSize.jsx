import React, { useEffect } from "react";

const CheckingWindowSize = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log(`${window.innerHeight} x ${window.innerWidth}`);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>CheckingWindowResize</div>;
};

export default CheckingWindowSize;
