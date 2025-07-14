'use client';

import { motion } from 'framer-motion';
import {
  SiDotnet,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const skills = [
  { icon: SiDotnet, label: '.NET' },
  { icon: SiReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: DiJava, label: 'Java' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiGit, label: 'Git' },
  { icon: SiHtml5, label: 'HTML' },
  { icon: SiCss3, label: 'CSS' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-50 dark:bg-slate-900 px-6 py-16 md:py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-10 md:grid-cols-6">
        {skills.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="flex flex-col items-center gap-2 text-indigo-500 dark:text-cyan-400"
          >
            <Icon className="text-5xl" />
            <span className="text-sm text-gray-800 dark:text-slate-200">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
