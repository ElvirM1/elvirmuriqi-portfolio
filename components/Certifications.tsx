"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

const openCertificate = (path: string) => {
  window.open(path, "_blank", "noopener,noreferrer");
};

const officialCerts = [
  { name: "C# & .NET Core Development", issuer: "Tectigon Academy" },
  { name: "Full-Stack Development & UI/UX Design", issuer: "Tectigon Academy" },
  { name: "Certified Software Developer", issuer: "UBT University" },
  {
    name: "Professional Internship in Information Technology",
    issuer: "COMINGEPE SHPK – Peje",
  },
  { name: "IT Essentials", issuer: "Cisco Networking Academy" },
  { name: "CCNAv7", issuer: "Cisco Networking Academy" },
];

const onlineCourses = [
  {
    name: "FastAPI (Beginner + Advanced)",
    pdf: "/FastAPI%20-%20Certificate.pdf",
  },
  {
    name: "Understanding TypeScript",
    pdf: "/TypeScript%20-%20Certificate.pdf",
  },
  { name: "Complete C# Masterclass", pdf: "/C%23%20-%20Certificate.pdf" },
  { name: "Complete SQL Bootcamp", pdf: "/SQL-Certificate.pdf" },
  { name: "The Complete Git Guide", pdf: "/Certificate-GIT.pdf" },
  { name: "Docker Mastery", pdf: "/Docker%20Mastery%20-%20Certification.pdf" },
  { name: "The Ultimate React Course", pdf: "/React-Certificate.pdf" },
  { name: "GitHub Actions", pdf: "/GitHub-Actions-Certificate.pdf" },
  { name: "OWASP Top 10 — Web Security", pdf: "/OWASP%20-%20Certificate.pdf" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-shell scroll-mt-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 sm:px-6 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 hidden dark:block bg-gradient-to-b from-[#06153a]/65 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400"
          >
            Continuous Learning
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            Formal certifications and focused coursework that support practical
            engineering work across backend, frontend, databases, and tooling.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Official Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/75"
          >
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100">
              <HiAcademicCap className="text-2xl text-blue-600 dark:text-cyan-400" />
              Official Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {officialCerts.map(({ name, issuer }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.38,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100 dark:bg-slate-800/60 dark:ring-slate-700 hover:ring-blue-400/40 dark:hover:ring-cyan-500/40 transition-colors duration-200"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08 + 0.15,
                      type: "spring",
                      stiffness: 420,
                      damping: 18,
                    }}
                  >
                    <HiBadgeCheck className="mt-0.5 shrink-0 text-xl text-blue-600 dark:text-cyan-400" />
                  </motion.span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Online Courses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/75"
          >
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100">
              <HiAcademicCap className="text-2xl text-indigo-600 dark:text-indigo-400" />
              Online Courses — Udemy
            </h3>
            <div className="flex flex-col gap-3">
              {onlineCourses.map(({ name, pdf }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -4 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.38,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100 dark:bg-slate-800/60 dark:ring-slate-700 hover:ring-indigo-400/40 dark:hover:ring-indigo-500/40 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.07 + 0.15,
                        type: "spring",
                        stiffness: 420,
                        damping: 18,
                      }}
                    >
                      <HiBadgeCheck className="shrink-0 text-xl text-indigo-600 dark:text-indigo-400" />
                    </motion.span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                      {name}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => openCertificate(pdf)}
                    whileHover={{ scale: 1.07, y: -1 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-indigo-200 bg-white px-2.5 py-1 text-xs font-medium text-indigo-700 shadow-sm transition-colors hover:border-indigo-400 hover:bg-indigo-50 dark:border-indigo-800/70 dark:bg-slate-900 dark:text-indigo-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-900/30"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
