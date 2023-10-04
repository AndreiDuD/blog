"use client";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollTop, setscrollTop] = useState();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setscrollTop(scrolled);
  };

  return (
    <div className="fixed -ml-1 mb-4 h-full w-4 bg-gray/90">
      <div
        className="bg-accent transition-all duration-1000 ease-out dark:bg-accentDark"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
