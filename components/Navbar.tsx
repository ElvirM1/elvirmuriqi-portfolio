'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    // Për efektin e ngjyrës kur scroll
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Për të vendosur linkun aktiv sipas pozicionit në faqe
      let current = 'home';
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

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur bg-black/40 py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-4">
        {links.map(({ id, label }) => (
          <Button
            key={id}
            variant="ghost"
            onClick={handleScroll(id)}
            className={`text-slate-200 hover:bg-slate-800/40 transition-colors duration-200 ${
              activeId === id
                ? 'text-indigo-400 underline underline-offset-4 decoration-2'
                : ''
            }`}
          >
            {label}
          </Button>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
