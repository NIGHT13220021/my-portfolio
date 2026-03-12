import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-40 bg-[#111111] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE — Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Let’s Build
            <br />
            Something
            <span className="block text-[#C6BFB3]">
              Exceptional.
            </span>
          </h2>

          <p className="mt-8 text-gray-400 max-w-md text-lg">
            I’m available for freelance projects, collaborations,
            and meaningful partnerships.
          </p>

          <div className="mt-10">
            <a
              href="mailto:kundan@example.com"
              className="inline-block bg-white text-black px-10 py-4 rounded-full
                         hover:scale-105 transition-all duration-300"
            >
              Hire Me →
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-10"
        >

          {/* Email */}
          <a
            href="mailto:kundan@example.com"
            className="flex items-center gap-6 group"
          >
            <Mail className="text-gray-400 group-hover:text-white transition" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Email
              </p>
              <p className="text-lg group-hover:underline">
                kundan@example.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-6 group"
          >
            <Phone className="text-gray-400 group-hover:text-white transition" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Call
              </p>
              <p className="text-lg group-hover:underline">
                +91 98765 43210
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group"
          >
            <MessageCircle className="text-gray-400 group-hover:text-white transition" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                WhatsApp
              </p>
              <p className="text-lg group-hover:underline">
                Chat Instantly
              </p>
            </div>
          </a>

        </motion.div>

      </div>
    </section>
  );
}
