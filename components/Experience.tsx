"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Genpact",
    type: "Internship · Remote",
    date: "Sep 2025 ",
    description:
      "Shipping features and fixing bugs in a live production codebase. Working across backend and full-stack tasks in an agile team — Jira-tracked sprints, CI/CD pipelines, and code reviews as standard workflow.",
    skills: ["React", ".NET", "Python", "FastAPI", "Docker", "CI/CD", "Jira"],
    dotColor: "bg-blue-600 dark:bg-cyan-400",
  },
  {
    role: "Software Development Intern — Full Stack, C#/.NET",
    company: "Tectigon Academy",
    type: "Internship · On-site",
    date: "Dec 2024 – May 2025",
    description:
      "Built full-stack web applications from scratch using C#/.NET and React. Designed REST APIs with JWT authentication, connected to SQL Server, and applied OOP patterns across real project scope.",
    skills: ["C#", ".NET Core", "React", "SQL Server", "JWT"],
    dotColor: "bg-indigo-600 dark:bg-indigo-400",
  },
  {
    role: "WordPress Developer Intern",
    company: "COM-ING",
    type: "Internship · On-site",
    date: "Nov 2023 – Jan 2024",
    description:
      "Built and maintained client websites on WordPress — custom themes, plugin integration, and responsive layouts delivered to brief and on schedule.",
    skills: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    dotColor: "bg-violet-600 dark:bg-violet-400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.52, delay: i * 0.14, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell scroll-mt-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400"
          >
            Career Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            Three roles across backend, full-stack, and web delivery — each
            building directly on the last.
          </motion.p>
        </div>

        <div className="relative flex flex-col gap-8 pl-8 sm:pl-10">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-violet-500 opacity-60 dark:from-cyan-400 dark:via-indigo-400 dark:to-violet-400"
          />

          {experiences.map(
            (
              { role, company, type, date, description, skills, dotColor },
              i,
            ) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot with spring pop */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.14 + 0.2,
                    type: "spring",
                    stiffness: 420,
                    damping: 18,
                  }}
                  className={`absolute -left-[2.35rem] top-2 h-5 w-5 rounded-full ${dotColor} ring-4 ring-slate-50 dark:ring-slate-950 sm:-left-[2.85rem]`}
                />

                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  }}
                  transition={{ type: "spring", stiffness: 340, damping: 22 }}
                  className={`rounded-[26px] bg-white/90 p-5 shadow-md ring-1 ring-slate-100 dark:bg-slate-900/90 dark:ring-slate-800 sm:p-6`}
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {role}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                    {company}
                  </p>
                  <p className="mt-0.5 mb-4 text-xs text-slate-500 dark:text-slate-400">
                    {type} · {date}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, si) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.14 + 0.35 + si * 0.04,
                          type: "spring",
                          stiffness: 360,
                          damping: 20,
                        }}
                        className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
