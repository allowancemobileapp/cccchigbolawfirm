import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type PracticeArea = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  fullDescription: string[];
  image: string;
};

export type Publication = {
  id: string;
  title: string;
  slug: string;
  coAuthor?: string;
  year: number;
  summary: string;
  downloadUrl?: string;
  isbn?: string;
  coverImage: string;
};

export type SpeakingEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  materialsUrl?: string;
};

export type Education = {
  degree: string;
  institution: string;
};

export type LegalPage = {
  title: string;
  content: string[];
};
