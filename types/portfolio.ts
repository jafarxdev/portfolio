import type { LucideIcon } from "lucide-react";

export type Accent = "blue" | "purple";

export interface NavigationItem {
  href: `/${string}` | "/";
  label: string;
}

export interface Stat {
  value: string;
  unit: string;
  label: string;
  accent: Accent;
}

export interface IconLabel {
  label: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  context: string;
  period: string;
  problem: string;
  contribution: string;
  outcome: string;
  technologies: readonly string[];
  icon: LucideIcon;
  accent: Accent;
}

export interface Specialization {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: readonly string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: readonly string[];
}

export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export interface Recognition {
  title: string;
  detail: string;
  year: string;
  credentialUrl?: string;
}
