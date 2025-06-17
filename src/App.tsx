import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <LanguageSelector />
      </Router>
    </LanguageProvider>
  );
}

export default App;
