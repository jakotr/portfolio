import Introduction from "./components/Introduction";
import ProgressBar from "./components/ProgressBar";
import Projects from "./components/Projects";
import StaticSidebar from "./components/StaticSidebar";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="app relative">
      <Introduction />
      <WorkExperience />
      <Technologies />
      <Projects />

      <StaticSidebar />
      <ProgressBar />
    </div>
  );
}

export default App;
