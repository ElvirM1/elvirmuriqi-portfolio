"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-14 text-slate-600 transition-colors duration-300 dark:text-slate-400">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl rounded-[30px] border border-slate-200/70 bg-white/80 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400">
              Let&apos;s Build Something Solid
            </p>
            <h3 className="heading-font text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Software Engineer focused on practical, production-ready work.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Backend systems, full-stack applications, and reliable delivery
              with a clean engineering mindset.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-500 dark:text-cyan-400" />
              <a
                href="mailto:muriqielvir8@gmail.com"
                className="hover:text-indigo-500 dark:hover:text-cyan-400 transition"
              >
                muriqielvir8@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-500 dark:text-cyan-400" />
              <a
                href="tel:+38349210337"
                className="hover:text-indigo-500 dark:hover:text-cyan-400 transition"
              >
                +383 49 210 337
              </a>
            </div>
            <a
              href="/CV_ElvirMuriqi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
            >
              <Download className="h-4 w-4" />
              Open CV
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-slate-200/80 pt-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/ElvirM1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition duration-150 hover:text-slate-900 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/elvir-muriqi-012773302/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition duration-150 hover:text-blue-600 dark:hover:text-sky-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/elvirmuriiqi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-base transition duration-150 hover:text-pink-500 dark:hover:text-pink-400"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Elvir Muriqi · Software Engineer
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
