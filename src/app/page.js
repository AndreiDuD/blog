import About from "../components/Home/About";
import Introduction from "../components/Home/Introduction";
import ProfilePic from "../components/Home/ProfilePic";
import ProgressBar from "../components/Home/ProgressBar";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2 p-5">
        <Introduction />
        <About />
        <Skills />
        <Projects />
      </div>
      <div className="hidden md:block">
        <ProgressBar />
        <ProfilePic />
      </div>
    </div>
  );
}
