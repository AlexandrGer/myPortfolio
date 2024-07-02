import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Social from "../Social/Social";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
      <Social />
    </div>
  );
}

export default App;
