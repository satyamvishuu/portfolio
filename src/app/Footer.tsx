'use client';

import { useEffect, useState } from 'react';
import { aboutMe } from '@/data/aboutme';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
      <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between">
        <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400 text-center">
          <p>© {year ?? ''} {aboutMe.name}.</p>
          {aboutMe.secretDescription && (
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
              {aboutMe.secretDescription}
            </p>
          )}
        </div>
        <div className="mb-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-500 justify">
            <a
              href="https://github.com/tovacinni/research-website-template"
              className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
            >
              Source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
