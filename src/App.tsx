import Introduction from "./components/Introduction";
import StaticSidebar from "./components/StaticSidebar";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="app relative">
      <Introduction />
      <StaticSidebar />
      <WorkExperience />
    </div>
  );
}

export default App;
