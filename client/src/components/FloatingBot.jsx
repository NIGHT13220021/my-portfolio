import { motion } from "framer-motion";
import Lottie from "lottie-react";
import botAnimation from "../assets/bot.json";

export default function FloatingBot({ onClick }) {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-10 right-10 z-50 cursor-pointer"
    >
      {/* Glow Ring */}
      <div className="absolute inset-0 rounded-full 
                      bg-[#5C3A21]/30 blur-2xl 
                      animate-pulse" />

      {/* Glass Orb Container */}
      <div className="relative w-28 h-28 
                      bg-white/10 
                      backdrop-blur-xl 
                      border border-white/20
                      rounded-full 
                      shadow-[0_0_40px_rgba(92,58,33,0.4)]
                      flex items-center justify-center">

        {/* Lottie */}
        <Lottie
          animationData={botAnimation}
          loop
          className="w-20 h-20"
        />
      </div>

      {/* Ask Me Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute -top-10 right-0 
                   bg-[#5C3A21] text-white 
                   px-4 py-1 rounded-full 
                   text-sm shadow-lg"
      >
        RAM LAL 🤎
      </motion.div>
    </motion.div>
  );
}
