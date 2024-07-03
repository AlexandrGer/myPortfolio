import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import ProjectPage from "../ProjectPage/ProjectPage";
import Social from "../Social/Social";
import "./App.scss";
import ParticlesContainer from "../Particles/Particles";

function App() {
  return (
    <div className="page">
      <Header />
      <ParticlesContainer />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
      <Social />
    </div>
  );
}

export default App;
