import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
