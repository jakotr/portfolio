import {
  Contact,
  Footer,
  Introduction,
  ProgressBar,
  Projects,
  StaticSidebar,
  Technologies,
  WorkExperience,
} from "./components";

export const App = () => {
  return (
    <div className="app relative">
      <Introduction />
      <WorkExperience />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <StaticSidebar />
      <ProgressBar />
    </div>
  );
};

