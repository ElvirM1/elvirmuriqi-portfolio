'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  repo,
  demo,
}: Project) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl bg-neutral-800"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-slate-300">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-400">
          {tech.map((t) => (
            <li key={t}>#{t}</li>
          ))}
        </ul>
        <div className="mt-4 flex gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              className="text-slate-200 underline-offset-4 hover:underline"
            >
              Live
            </a>
          )}
          <a
            href={repo}
            target="_blank"
            className="text-slate-200 underline-offset-4 hover:underline"
          >
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
