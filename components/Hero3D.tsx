"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiDotnet,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
} from "react-icons/si";
import { ArrowRight, Download, ExternalLink, Sparkles } from "lucide-react";

const profilePoints = [
  "Production feature delivery in a real-world engineering team",
  "Backend APIs, relational databases, and full-stack systems",
  "Clean, maintainable code with focus on performance",
];

const primaryLinks = [
  {
    href: "https://github.com/ElvirM1",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    href: "https://www.linkedin.com/in/elvir-muriqi-012773302/",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
];

const secondaryLinks = [
  {
    href: "https://www.instagram.com/elvirmuriiqi/",
    label: "Instagram",
    Icon: SiInstagram,
  },
];

const techIcons = [
  { Icon: SiDotnet, title: ".NET", delay: 0.42 },
  { Icon: SiReact, title: "React", delay: 0.5 },
  { Icon: SiTypescript, title: "TypeScript", delay: 0.58 },
  { Icon: SiPython, title: "Python", delay: 0.66 },
  { Icon: SiDocker, title: "Docker", delay: 0.74 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden px-4 pb-14 pt-20 sm:px-6 sm:pt-24 sm:pb-16 md:pb-24 md:pt-32"
    >
      <div className="hero-grid hero-mask absolute inset-0 -z-20 opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(740px_500px_at_12%_8%,rgba(59,130,246,0.18),transparent_58%),radial-gradient(780px_520px_at_88%_10%,rgba(14,165,233,0.14),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.14),transparent)] dark:bg-[radial-gradient(740px_500px_at_12%_8%,rgba(34,211,238,0.12),transparent_58%),radial-gradient(780px_520px_at_88%_10%,rgba(59,130,246,0.16),transparent_54%),linear-gradient(180deg,rgba(15,23,42,0.26),transparent)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative order-2 lg:order-1"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-3.5 py-2 text-xs font-semibold text-sky-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300 sm:text-sm"
          >
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ delay: 1.2, duration: 0.7, ease: "easeInOut" }}
              className="flex"
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            Software Engineer
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="heading-font max-w-3xl text-[2rem] font-semibold leading-[0.96] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Software engineer.
            <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-blue-500">
              Backend to frontend.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8 md:text-lg"
          >
            I&apos;m Elvir Muriqi — a software engineer building backend APIs,
            relational data systems, and full-stack applications with{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              .NET
            </span>
            ,{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Python
            </span>
            , and{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              React
            </span>
            . Focused on clean architecture, solid data design, and reliable
            solutions that work in real-world environments.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-300"
          >
            {profilePoints.map((point, idx) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.55 + idx * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="flex items-start gap-3"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.58 + idx * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 16,
                  }}
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500"
                />
                <span>{point}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center gap-3 text-[1.65rem] text-blue-500 dark:text-cyan-400 sm:text-3xl"
          >
            {techIcons.map(({ Icon, title, delay }) => (
              <motion.span
                key={title}
                initial={{ opacity: 0, y: 12, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay,
                  type: "spring",
                  stiffness: 340,
                  damping: 18,
                }}
                whileHover={{
                  scale: 1.22,
                  rotate: [-3, 3, 0],
                  transition: { duration: 0.3 },
                }}
                title={title}
                className="cursor-default"
              >
                <Icon />
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.button
              onClick={scrollToContact}
              aria-label="Scroll to Contact Section"
              whileHover={{
                y: -2,
                boxShadow: "0 20px 40px rgba(15,23,42,0.28)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/25 transition-colors duration-200 dark:from-cyan-400 dark:to-sky-300 dark:text-slate-950 dark:shadow-cyan-400/20 dark:hover:from-cyan-300 dark:hover:to-sky-200 sm:w-auto"
            >
              Let&apos;s Connect
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  duration: 0.5,
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>

            <motion.a
              href="/CV_ElvirMuriqi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors duration-200 hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-700 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80 dark:hover:text-cyan-300 sm:w-auto"
            >
              Open CV
              <Download className="h-4 w-4" />
            </motion.a>

            <motion.span
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors duration-200 hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-700 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80 dark:hover:text-cyan-300"
              >
                View Projects
                <ExternalLink className="h-4 w-4" />
              </button>
            </motion.span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {primaryLinks.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.a>
            ))}
            <div className="h-5 w-px bg-slate-200 dark:bg-slate-700" />
            {secondaryLinks.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/60 bg-white/60 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-500 dark:hover:border-slate-700 dark:hover:text-slate-300"
              >
                <Icon className="h-3.5 w-3.5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-[350px] sm:max-w-[410px] lg:order-2 lg:ml-auto"
        >
          <div className="mx-auto w-fit lg:hidden">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="rounded-[999px] border-2 border-cyan-400/80 bg-[#072052]/70 p-1.5 shadow-[0_20px_60px_rgba(6,182,212,0.22)]"
            >
              <Image
                src="/profile.jpg"
                alt="Elvir Muriqi - Software Engineer"
                width={260}
                height={340}
                priority
                className="h-[260px] w-[190px] sm:h-[300px] sm:w-[220px] rounded-[999px] object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative hidden overflow-hidden rounded-[24px] border border-white/70 bg-white/75 p-3 shadow-[0_26px_70px_rgba(14,165,233,0.18)] backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/75 dark:shadow-[0_26px_70px_rgba(2,6,23,0.6)] sm:p-4 lg:block"
          >
            <div className="absolute inset-x-6 top-0 h-24 rounded-full bg-gradient-to-r from-sky-400/25 to-cyan-400/20 blur-2xl" />
            <Image
              src="/profile.jpg"
              alt="Elvir Muriqi - Software Engineer"
              width={520}
              height={620}
              priority
              className="relative h-[350px] w-full rounded-[18px] object-cover sm:h-[420px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
