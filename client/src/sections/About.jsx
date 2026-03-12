import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import myVideo from "../assets/myvideo.mp4";

export default function About() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { amount: 0.5 });

  // Play / Pause based on visibility
  if (videoRef.current) {
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-[#F6F3EE] flex items-center py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.35em] uppercase text-gray-500">
            About Me
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif leading-tight text-[#111111]">
            Hi, I’m <span className="italic">Kundan</span>.
            <br />
            A Creative Developer
            <br />
            Building With Precision.
          </h2>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed max-w-xl">
            I focus on building scalable, performance-driven applications.
            My approach blends clean architecture, disciplined execution,
            and modern engineering principles.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            {["Java", "React", "DSA", "Cybersecurity"].map((item, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-[#111111] text-white rounded-full text-xs tracking-[0.15em] uppercase shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:bg-[#2b2b2b] transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE — PROFESSIONAL VIDEO CONTROL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative w-80 h-80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg"
          >
            <video
              ref={videoRef}
              src={myVideo}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}