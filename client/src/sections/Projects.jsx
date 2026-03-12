import { Code, Database, Layout, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  const icons = [Code, Database, Layout, Shield];

  return (
    <section id="projects" className="py-32 bg-[#F4F1EA]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-[#111111]"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-24 relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[1px] bg-[#E5DED2]" />

          <div className="grid md:grid-cols-4 gap-16 relative">
            {projects.map((project, index) => {
              const Icon = icons[index];

              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition"
                  >
                    <div className="w-20 h-20 rounded-full bg-white 
                                    border border-[#D9D2C6] 
                                    flex items-center justify-center
                                    shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                      <Icon size={22} className="text-[#111111]" />
                    </div>

                    <h3 className="mt-8 font-serif text-lg text-[#111111]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-[240px]">
                      {project.desc}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}