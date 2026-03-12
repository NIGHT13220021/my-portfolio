import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Java Architecture",
      desc: "Structured backend systems built with clean architecture principles.",
    },
    {
      title: "React Systems",
      desc: "Scalable frontend applications with reusable components.",
    },
    {
      title: "DSA Mastery",
      desc: "Strong algorithmic thinking & problem-solving foundation.",
    },
    {
      title: "Database Design",
      desc: "Optimized MySQL schemas & relational data modeling.",
    },
    {
      title: "Node.js APIs",
      desc: "RESTful backend services with performance focus.",
    },
    {
      title: "Cybersecurity",
      desc: "Secure coding practices & vulnerability awareness.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-40 bg-[#F5F2EC] overflow-hidden"
    >
      {/* Soft Dome Background */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[#EDE7DD] rounded-full opacity-70"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-[#111111]">
            Skills & Expertise
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Focused on building scalable, clean and high-performance systems.
            Every skill supports long-term engineering vision.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl transition-all duration-500 
                ${
                  index === 2
                    ? "bg-black text-white shadow-2xl scale-105"
                    : "bg-white text-[#111111] shadow-md hover:shadow-xl"
                }`}
            >
              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  index === 2 ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Text */}
        <div className="mt-28 text-center">
          <h3 className="font-serif text-3xl text-[#111111]">
            Engineering With Intent.
          </h3>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My stack is not just about tools. It’s about discipline, structure,
            and execution. Clean systems. Reliable foundations. Scalable growth.
          </p>
        </div>

      </div>
    </section>
  );
}
