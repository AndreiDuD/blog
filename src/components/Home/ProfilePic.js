"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profileRight from "@/public/profile.jpg";

const ProfilePic = () => {
  const [profileTop, setProfileTop] = useState(0);
  console.log(profileTop);

  useEffect(() => {
    const handleScroll = () => {
      const newTop = Math.max(0, window.scrollY);
      setProfileTop(newTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed"
      style={{
        transform: `translateY(${profileTop}px)`,
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Image
        src={profileRight}
        alt="profile image"
        className="h-screen object-cover"
      />
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/70 rounded-xl z-10"
      />
    </div>
  );
};

export default ProfilePic;
