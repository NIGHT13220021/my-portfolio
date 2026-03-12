import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import FloatingBot from "./components/FloatingBot";
import AskAI from "./components/AskAI";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import ProjectDetail from "./pages/ProjectDetail";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/projects");

  return (
    <div className="bg-slate-900 text-gray-200 min-h-screen relative overflow-x-hidden">

      {/* Hide Navbar on Project Page */}
      {!isProjectPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      {/* Hide Bot on Project Page */}
      {!isProjectPage && (
        <>
          <FloatingBot onClick={() => setChatOpen(true)} />
          {chatOpen && (
            <AskAI onClose={() => setChatOpen(false)} />
          )}
        </>
      )}

    </div>
  );
}