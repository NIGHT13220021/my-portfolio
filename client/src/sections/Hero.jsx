import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&compress&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&compress&q=60",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&compress&q=60",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&compress&q=60",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&compress&q=60",
  ];

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F5F1EA] text-[#111111] flex flex-col justify-between pt-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#EDE7DE_0%,#F5F1EA_70%)]" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif leading-tight tracking-tight"
        >
          Build With Precision,
          <br />
          Engineer With Vision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Java • React • DSA • Cybersecurity Enthusiast.
          Creating scalable systems with disciplined execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={scrollToProjects}
            className="bg-black text-white px-12 py-4 rounded-full font-medium tracking-wide hover:opacity-80 transition cursor-pointer"
          >
            View My Work →
          </button>
        </motion.div>

      </div>

      {/* Optimized Image Grid */}
      <div className="relative mt-16 flex justify-center items-end gap-6 px-6 pb-24">

        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt="portfolio visual"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`w-28 md:w-40 h-52 md:h-64 object-cover rounded-3xl shadow-md
              ${
                index === 2
                  ? "translate-y-0"
                  : index === 1 || index === 3
                  ? "translate-y-6"
                  : "translate-y-12"
              }`}
          />
        ))}

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F1EA] to-transparent" />
    </section>
  );
}
