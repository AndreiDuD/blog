"use client";
import Image from "next/image";
import profileRight from "@/public/profile.jpg";
import { useState, useEffect } from "react";

const ProfilePic = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      const newScrollTop = window.scrollY;

      // Determine when to make the progress bar sticky
      if (newScrollTop >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        top: isFixed ? "0" : "auto",
        transition: "top 0.3s ease-in-out", // Add a smooth transition
        position: isFixed ? "sticky" : "relative",
      }}
    >
      <Image
        src={profileRight}
        alt="profile image"
        className="h-screen rounded-md object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full bg-gradient-to-b from-transparent from-0% to-dark/70" />
    </div>
  );
};

export default ProfilePic;
