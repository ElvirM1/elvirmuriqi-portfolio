'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Project = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
};

const projectsData: Project[] = [
  {
    title: 'FitnessApp',
    description: 'Full-stack fitness platform with .NET & React',
    bullets: ['Workout plans', 'User logs', 'JWT Auth'],
    tech: ['.NET Core', 'ReactJS', 'JWT'],
  },
  {
    title: 'Restaurant Management',
    description: 'System for reservations, orders, and staff',
    bullets: ['Reservation system', 'Order tracking', 'Login'],
    tech: ['C#', '.NET Core', 'MySQL'],
  },
  {
    title: 'Job Portal',
    description: 'Platform for job listings and applications',
    bullets: ['Job CRUD', 'Filtering', 'Admin dashboard'],
    tech: ['Node.js', 'MySQL'],
  },
  {
    title: 'NotaryPublic Web App',
    description: 'Static site for a notary business',
    bullets: ['Responsive design', 'Contact form'],
    tech: ['Node.js', 'Tailwind CSS'],
  },
  {
    title: 'E‑Commerce Platform',
    description: 'Scalable shopping solution',
    bullets: ['Product catalog', 'Payments', 'User auth'],
    tech: ['.NET Core', 'React', 'Stripe'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 relative px-6 py-16 text-white"
    >
      {/* —— Mesh gradient background (blue → cyan) —— */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_500px_at_15%_25%,#2563eb_0%,rgba(37,99,235,0.12)_60%),radial-gradient(600px_400px_at_85%_80%,#06b6d4_0%,rgba(6,182,212,0.12)_70%)] dark:bg-[radial-gradient(700px_500px_at_15%_25%,#1d4ed8_0%,rgba(29,78,216,0.2)_60%),radial-gradient(600px_400px_at_85%_80%,#0e7490_0%,rgba(14,116,144,0.2)_70%)]" />

      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-slate-900 dark:text-white">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(({ title, description, bullets, tech }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl bg-white/60 p-6 shadow-xl backdrop-blur-md ring-1 ring-white/20 dark:bg-slate-900/60 dark:ring-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-cyan-300">
                {title}
              </h3>
              <p className="mt-1 mb-3 text-sm text-slate-700 dark:text-slate-300">
                {description}
              </p>

              <ul className="mb-4 list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
                {bullets.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-indigo-200/70 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-700/40 dark:text-indigo-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
