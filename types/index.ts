export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  category: 'AI / ML' | 'Data Science' | 'Python / Backend' | 'Full Stack';
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  overview?: string;
  problem?: string;
  solution?: string;
  techStackDetails?: string[];
  keyFeatures?: string[];
  challengesLearnings?: string;
  architectureDiagram?: string;
  folderStructure?: string;
  futureImprovements?: string[];
  screenshots?: string[];
  stars?: string;
  commits?: string;
  duration?: string;
  status?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level: string; // e.g. "Advanced", "Intermediate"
  category: 'AI & Machine Learning' | 'Data Science & Big Data' | 'Python & Backend' | 'DevOps & Cloud' | 'Tools & Frameworks';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon?: string;
}
