'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12 px-6 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Informata Kontakti */}
        <div className="flex flex-col items-center md:items-start gap-2 text-sm">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-500 dark:text-cyan-400" />
            <a href="mailto:muriqielvir8@gmail.com" className="hover:text-indigo-500 dark:hover:text-cyan-400 transition">
              muriqielvir8@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-indigo-500 dark:text-cyan-400" />
            <a href="tel:+38349210337" className="hover:text-indigo-500 dark:hover:text-cyan-400 transition">
              +383 49 210 337
            </a>
          </div>
        </div>

        {/* Rrjetet Sociale */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/ElvirM1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 dark:hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/elvir-muriqi-012773302/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 dark:hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Elvir Muriqi – Software Developer. All rights reserved.
      </div>
    </footer>
  );
}
