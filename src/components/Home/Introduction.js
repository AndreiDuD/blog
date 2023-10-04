import Image from "next/image";
import profileIntro from "@/public/profile.jpeg";

const Introduction = () => {
  return (
    <section id="intro" className="flex flex-col items-center justify-center">
      <div className="h-36" />
      <div className="h-4 w-4 rounded-full bg-accent dark:bg-accentDark"></div>
      <h2 className="mt-5 text-lg font-medium text-dark dark:text-light">
        Hi, my name is
      </h2>
      <h2 className="mt-5 text-center text-7xl font-bold tracking-widest text-dark dark:text-light">
        Andrei <br />
        Duduman
      </h2>
      <Image
        src={profileIntro}
        alt="profile"
        className="mt-10 h-48 w-48 rounded-full bg-accent object-cover p-2 dark:bg-accentDark"
      />
    </section>
  );
};

export default Introduction;
