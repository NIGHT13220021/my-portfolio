import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import photo from "../assets/photo.png";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F1EA] text-[#111111]">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#111111] px-6 py-10">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">

        <button
          onClick={() => navigate("/")}
          className="text-sm px-5 py-2 rounded-full 
                     border border-[#5C3A21] 
                     text-[#5C3A21] 
                     hover:bg-[#5C3A21] 
                     hover:text-white 
                     transition"
        >
          ← Back to Home
        </button>

        <div className="flex items-center gap-4">
          <span className="tracking-[0.4em] text-sm text-[#3E2616]">
            KUNDAN.dev
          </span>

          <img
            src={photo}
            alt="Kundan"
            className="w-12 h-12 rounded-full object-cover 
                       border border-[#E6D5C3] shadow-sm"
          />
        </div>
      </div>

      {/* ================= PREV / NEXT BUTTONS ================= */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12">

        {/* PREVIOUS */}
        {prevProject ? (
          <button
            onClick={() =>
              navigate(`/projects/${prevProject.slug}`)
            }
            className="group relative overflow-hidden px-6 py-3 
                       rounded-2xl bg-white 
                       border border-[#E6D5C3] shadow-sm
                       hover:shadow-md transition-all duration-300"
          >
            <span
              className="absolute inset-0 bg-[#5C3A21]
                         translate-x-[-100%]
                         group-hover:translate-x-0
                         transition-transform duration-300"
            />

            <span
              className="relative flex items-center gap-2 text-sm
                         text-[#5C3A21]
                         group-hover:text-white
                         transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              {prevProject.title}
            </span>
          </button>
        ) : <div />}

        {/* NEXT */}
        {nextProject && (
          <button
            onClick={() =>
              navigate(`/projects/${nextProject.slug}`)
            }
            className="group relative overflow-hidden px-6 py-3 
                       rounded-2xl bg-white 
                       border border-[#E6D5C3] shadow-sm
                       hover:shadow-md transition-all duration-300"
          >
            <span
              className="absolute inset-0 bg-[#5C3A21]
                         translate-x-[100%]
                         group-hover:translate-x-0
                         transition-transform duration-300"
            />

            <span
              className="relative flex items-center gap-2 text-sm
                         text-[#5C3A21]
                         group-hover:text-white
                         transition-colors"
            >
              {nextProject.title}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </button>
        )}

      </div>

      {/* ================= YOUR EXISTING GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TITLE CARD */}
        <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-[#E6D5C3] shadow-sm">
          <h1 className="text-4xl md:text-5xl font-serif mb-3">
            {project.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{project.year || "2024"}</span>
            <span>•</span>
            <span>{project.category || "Full Stack Web App"}</span>
            <span>•</span>
            <span className="text-green-600 font-medium">
              {project.status || "Completed"}
            </span>
          </div>
        </div>

        {/* COMPLEXITY */}
        <div className="bg-white p-6 rounded-2xl border border-[#E6D5C3] shadow-sm">
          <h3 className="mb-4 font-medium">Complexity</h3>
          <div className="h-3 bg-[#E6D5C3] rounded-full mb-2">
            <div
              className="h-3 bg-[#5C3A21] rounded-full"
              style={{ width: `${project.duration}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">
            {project.duration}%
          </p>
        </div>

        {/* UI SCORE */}
        <div className="bg-white p-6 rounded-2xl border border-[#E6D5C3] shadow-sm">
          <h3 className="mb-4 font-medium">UI Score</h3>
          <div className="h-3 bg-[#E6D5C3] rounded-full mb-2">
            <div
              className="h-3 bg-[#A67C52] rounded-full"
              style={{ width: `${project.uiScore || 75}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">
            {project.uiScore || 75}%
          </p>
        </div>

        {/* PROBLEM */}
        <div className="bg-white p-6 rounded-2xl border border-[#E6D5C3] shadow-sm">
          <h3 className="mb-3 font-medium">Problem</h3>
          <p className="text-gray-600 text-sm">
            {project.problem}
          </p>
        </div>

        {/* SOLUTION */}
        <div className="bg-white p-6 rounded-2xl border border-[#E6D5C3] shadow-sm">
          <h3 className="mb-3 font-medium">Solution</h3>
          <p className="text-gray-600 text-sm">
            {project.solution}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="md:col-span-3 bg-white p-6 rounded-2xl border border-[#E6D5C3] shadow-sm">
          <h3 className="mb-4 font-medium">Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm 
                           bg-[#F4F1EA] 
                           border border-[#E6D5C3] 
                           rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}