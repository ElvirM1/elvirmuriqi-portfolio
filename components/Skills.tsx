"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Database,
  Globe,
  ServerCog,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend Engineering",
    Icon: ServerCog,
    accent: "from-sky-500 to-blue-600",
    skills: [
      "C#",
      ".NET",
      "FastAPI",
      "Node.js",
      "PHP",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Frontend Development",
    Icon: Globe,
    accent: "from-cyan-500 to-sky-500",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    Icon: Database,
    accent: "from-indigo-500 to-blue-600",
    skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "Tools and Workflow",
    Icon: Wrench,
    accent: "from-blue-500 to-cyan-500",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Postman",
      "Jira",
      "Agile / Scrum",
      "CI/CD",
    ],
  },
  {
    title: "Languages and Fundamentals",
    Icon: Braces,
    accent: "from-sky-500 to-indigo-500",
    skills: [
      "Python",
      "Java",
      "GraphQL",
      "OOP",
      "REST Design",
      "Data Modeling",
    ],
  },
  {
    title: "Cloud & Deployment",
    Icon: Cloud,
    accent: "from-violet-500 to-purple-600",
    skills: ["Vercel", "Linux", "Nginx", "OpenAPI / Swagger", "Netlify", "n8n"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell scroll-mt-24 relative overflow-hidden bg-slate-50 px-4 sm:px-6 py-14 sm:py-20 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(760px_460px_at_14%_12%,rgba(14,165,233,0.14),transparent_64%),radial-gradient(680px_420px_at_88%_88%,rgba(59,130,246,0.12),transparent_66%)] dark:bg-[radial-gradient(760px_460px_at_14%_12%,rgba(34,211,238,0.12),transparent_64%),radial-gradient(680px_420px_at_88%_88%,rgba(37,99,235,0.14),transparent_66%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400"
          >
            Technical Profile
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="heading-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52 }}
            className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            Technologies I use daily and have shipped real work with.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, skills, Icon, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, boxShadow: "0 16px 36px rgba(0,0,0,0.09)" }}
              transition={{
                opacity: { duration: 0.38, delay: i * 0.07 },
                y: { type: "spring", stiffness: 320, damping: 22 },
                scale: { type: "spring", stiffness: 320, damping: 22 },
              }}
              viewport={{ once: true }}
              className="rounded-[24px] border border-slate-200/80 bg-white/88 p-5 shadow-sm ring-1 ring-white/70 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/86 dark:ring-slate-800/70"
            >
              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.78 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.07 + 0.25 + si * 0.04,
                      type: "spring",
                      stiffness: 360,
                      damping: 20,
                    }}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
