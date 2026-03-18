"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import React from "react";

type Project = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  accentFrom: string;
  accentTo: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projectsData: Project[] = [
  {
    title: "CommunityHelp Platform",
    description:
      "Full-stack platform connecting people who need help with local volunteers.",
    bullets: [
      "Map-based volunteer matching with location-aware queries",
      "Real-time messaging, user profiles, and a peer-rating system",
      "FastAPI REST backend with JWT auth, full CRUD, and PostgreSQL",
    ],
    tech: ["FastAPI", "Next.JS", "PostgreSQL", "JWT"],
    accentFrom: "from-blue-600",
    accentTo: "to-cyan-500",
    liveUrl: "https://www.communityhelp.space",
    githubUrl: "https://github.com/edonberishaa/community-help",
  },
  {
    title: "The Wild Oasis Website",
    description:
      "Customer-facing hotel booking site built with Next.js 14 server components.",
    bullets: [
      "Server-side data fetching with React Server Components and Suspense",
      "OAuth guest authentication via NextAuth.js",
      "Cabin filtering, date availability, and full reservation management",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "NextAuth"],
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    githubUrl: "https://github.com/ElvirM1/the-wild-oasis-website-video",
  },
  {
    title: "Online Guitar Shop",
    description:
      "E-commerce SPA with a GraphQL API and Apollo Client state management.",
    bullets: [
      "GraphQL queries and mutations with Apollo Client caching",
      "Dynamic product catalog with detail pages and cart logic",
      "Fully responsive layout across mobile and desktop",
    ],
    tech: ["React", "GraphQL", "Apollo Client"],
    accentFrom: "from-cyan-600",
    accentTo: "to-teal-500",
    githubUrl: "https://github.com/ElvirM1/Online-Guitar-Shop",
  },
  {
    title: "Restaurant Management System",
    description:
      "Backend-focused .NET Core system with relational data design and JWT-secured access.",
    bullets: [
      "Full CRUD for customers, reservations, and order records",
      "JWT-secured login with role-based access control",
      "MySQL schema designed for relational integrity",
    ],
    tech: ["C#", ".NET Core", "MySQL", "JWT"],
    accentFrom: "from-indigo-600",
    accentTo: "to-blue-500",
  },
  {
    title: "NotaryPublic Web App",
    description:
      "Clean business website for a notary office — multi-page layout, contact form, and mobile-first design.",
    bullets: [
      "Structured service and information pages with intuitive navigation",
      "Contact form with server-side handling via Node.js",
      "Mobile-first responsive layout built with Tailwind CSS",
    ],
    tech: ["Node.js", "Tailwind CSS"],
    accentFrom: "from-violet-600",
    accentTo: "to-indigo-500",
  },
  {
    title: "Fitness Tracker",
    description:
      "Workout and fitness tracking app with exercise logging and session history.",
    bullets: [
      "Custom workout plan builder with an exercise library",
      "Per-session logging with progress tracking and history views",
      "REST API backend with a React frontend and SQL Server persistence",
    ],
    tech: ["React", ".NET", "SQL Server"],
    accentFrom: "from-violet-500",
    accentTo: "to-blue-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 relative overflow-hidden px-4 sm:px-6 py-14 sm:py-20"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(248,250,252,0.92)_0%,rgba(239,246,255,0.9)_52%,rgba(6,21,58,0.84)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.84)_0%,rgba(15,23,42,0.9)_55%,rgba(6,21,58,0.94)_100%)]" />
      {/* —— Mesh gradient background (blue → cyan) —— */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_500px_at_15%_25%,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0.04)_60%),radial-gradient(600px_400px_at_85%_80%,rgba(6,182,212,0.16)_0%,rgba(6,182,212,0.04)_70%)] dark:bg-[radial-gradient(700px_500px_at_15%_25%,rgba(29,78,216,0.22)_0%,rgba(29,78,216,0.06)_60%),radial-gradient(600px_400px_at_85%_80%,rgba(14,116,144,0.2)_0%,rgba(14,116,144,0.04)_70%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-font text-center text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Main Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            Backend and full-stack work — real APIs, data models, and interfaces
            built end-to-end.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projectsData.map(
            (
              {
                title,
                description,
                bullets,
                tech,
                accentFrom,
                accentTo,
                liveUrl,
                githubUrl,
              },
              i,
            ) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 44, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.52,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onClick={
                  liveUrl || githubUrl
                    ? () =>
                        window.open(
                          liveUrl ?? githubUrl!,
                          "_blank",
                          "noopener,noreferrer",
                        )
                    : undefined
                }
                onKeyDown={
                  liveUrl || githubUrl
                    ? (event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          window.open(
                            liveUrl ?? githubUrl!,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }
                      }
                    : undefined
                }
                role={liveUrl || githubUrl ? "link" : undefined}
                tabIndex={liveUrl || githubUrl ? 0 : undefined}
                className={`group flex flex-col overflow-hidden rounded-[28px] bg-white/72 shadow-xl backdrop-blur-md ring-1 ring-white/30 dark:bg-slate-900/70 dark:ring-slate-700/50 ${
                  liveUrl || githubUrl
                    ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400/60 dark:focus:ring-cyan-400/60"
                    : ""
                }`}
              >
                {/* Animated top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1 + 0.3,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originX: 0 }}
                  className={`h-1.5 w-full bg-gradient-to-r ${accentFrom} ${accentTo}`}
                />

                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`mb-1 bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-xl font-bold text-transparent`}
                      >
                        {title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {description}
                      </p>
                    </div>

                    {liveUrl && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1 + 0.4,
                          type: "spring",
                          stiffness: 380,
                          damping: 18,
                        }}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/80 dark:bg-emerald-950/40 dark:text-emerald-300"
                      >
                        Live
                      </motion.span>
                    )}
                  </div>

                  <ul className="mb-5 flex flex-col gap-2">
                    {bullets.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1 + 0.32 + index * 0.07,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-cyan-400" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {tech.map((t, ti) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.75 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.1 + 0.45 + ti * 0.05,
                            type: "spring",
                            stiffness: 360,
                            damping: 20,
                          }}
                          className="rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-700/30 dark:text-indigo-200"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {liveUrl ? (
                      <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-sky-700 transition group-hover:text-sky-800 dark:text-cyan-300 dark:group-hover:text-cyan-200">
                        View live
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    ) : githubUrl ? (
                      <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-600 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-200">
                        View code
                        <SiGithub className="h-4 w-4" />
                      </span>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
