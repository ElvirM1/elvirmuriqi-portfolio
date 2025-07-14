'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiDotnet, SiReact, SiTypescript } from 'react-icons/si';
import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(750px_550px_at_15%_25%,#2563eb_0%,rgba(37,99,235,0.15)_60%),radial-gradient(650px_450px_at_85%_80%,#06b6d4_0%,rgba(6,182,212,0.15)_70%)] dark:bg-[radial-gradient(750px_550px_at_15%_25%,#1d4ed8_0%,rgba(29,78,216,0.25)_60%),radial-gradient(650px_450px_at_85%_80%,#0e7490_0%,rgba(14,116,144,0.25)_70%)]" />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 md:flex-row md:items-start">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl bg-white/60 p-10 backdrop-blur-md drop-shadow-xl dark:bg-slate-900/60 md:w-1/2"
        >
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I’m{' '}
            <span className="text-blue-600 dark:text-cyan-400">
              Elvir Muriqi
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I&apos;m a full‑stack developer focused on building high‑performance
            backends with{' '}
            <span className="font-semibold text-blue-600 dark:text-cyan-400">
              .NET
            </span>{' '}
            and crafting seamless UIs with{' '}
            <span className="font-semibold text-blue-600 dark:text-cyan-400">
              React & TypeScript
            </span>
            . Passionate about clean architecture, scalable systems, and
            developer-friendly experiences.
          </p>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8 flex justify-start gap-6 text-4xl text-blue-500 dark:text-cyan-400"
          >
            <SiDotnet title=".NET" />
            <SiReact title="React" />
            <SiTypescript title="TypeScript" />
          </motion.div>

          <button
            onClick={scrollToContact}
            aria-label="Scroll to Contact Section"
            className="inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
          >
            Let’s Connect
          </button>

          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl ring-1 ring-white/20 dark:ring-black/25" />
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center md:w-1/2"
        >
          <Image
            src="/profile.jpg"
            alt="Elvir Muriqi - Full Stack Developer"
            width={280}
            height={280}
            priority
            className="rounded-full object-cover shadow-2xl ring-4 ring-blue-300/60 dark:ring-cyan-500/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
