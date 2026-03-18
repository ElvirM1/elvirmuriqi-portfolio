"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Code2, Download, Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // On page load / reload, always start at the top (disable scroll restoration)
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    // Update scrolled state for navbar style on scroll
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track the active section based on scroll position
      let current = "home";
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          if (window.scrollY + window.innerHeight / 3 >= top) {
            current = id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/78 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/72"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        <button
          onClick={handleScroll("home")}
          className="flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-left backdrop-blur-md transition hover:border-sky-300 hover:bg-white/90 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900"
          aria-label="Scroll to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="hidden sm:block">
            <span className="block heading-font text-sm font-semibold tracking-[0.18em] text-slate-900 dark:text-white">
              ELVIR MURIQI
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              Software Engineer
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 p-1.5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/75 md:flex">
          {links.map(({ id, label }) => (
            <Button
              key={id}
              variant="ghost"
              onClick={handleScroll(id)}
              className={`rounded-full px-4 text-sm transition-all duration-200 ${
                activeId === id
                  ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/CV_ElvirMuriqi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300 md:inline-flex"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300 md:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="mx-4 mt-3 rounded-3xl border border-slate-200/80 bg-white/92 p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/92 md:hidden">
          <div className="grid gap-2">
            {links.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={handleScroll(id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeId === id
                    ? "bg-slate-950 text-white dark:bg-cyan-400 dark:text-slate-950"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/CV_ElvirMuriqi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
            >
              <Download className="h-4 w-4" />
              Open CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
