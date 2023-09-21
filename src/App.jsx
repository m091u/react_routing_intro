import "./App.css";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import { Route, Routes } from "react-router-dom";
// App.jsx
// ... previous props stay unchanged

import projectsData from "./projects-data.json"; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route  path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
