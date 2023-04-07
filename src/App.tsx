import Introduction from "./components/Introduction";
import ProgressBar from "./components/ProgressBar";
import StaticSidebar from "./components/StaticSidebar";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="app relative">
      <Introduction />
      <WorkExperience />
      <Technologies />
      
      <StaticSidebar />
      <ProgressBar />
    </div>
  );
}

export default App;
