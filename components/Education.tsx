"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="section-shell scroll-mt-24 bg-white px-4 sm:px-6 py-12 sm:py-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400"
          >
            Academic Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Education
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -4, boxShadow: "0 14px 40px rgba(0,0,0,0.09)" }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="rounded-[26px] bg-white/90 p-6 shadow-md ring-1 ring-slate-100 dark:bg-slate-900/90 dark:ring-slate-800 sm:p-8"
        >
          <div className="flex items-start gap-5">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 380,
                damping: 18,
              }}
              whileHover={{ scale: 1.12, rotate: -8 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/20"
            >
              <BookOpen className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
              className="min-w-0"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Bachelor of Science — Computer Science &amp; Engineering
              </h3>
              <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                UBT — University for Business and Technology
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                2022 – 2025 · Pristina, Kosovo
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
