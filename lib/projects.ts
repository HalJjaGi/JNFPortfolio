import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDir = path.join(process.cwd(), 'content');

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  members: string[];
  links: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  images: string[];
  period?: string;
  highlights?: string[];
  category?: string;
  status?: 'live' | 'in-development' | 'archived';
}

export function getProjectSlugs(): string[] {
  const projectsDir = path.join(contentDir, 'projects');
  const files = fs.readdirSync(projectsDir);
  return files
    .filter(f => f.endsWith('.yaml') && !f.startsWith('_'))
    .map(f => f.replace(/\.yaml$/, ''));
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const filePath = path.join(contentDir, 'projects', `${slug}.yaml`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as Project;
  } catch {
    return null;
  }
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  return slugs
    .map(slug => getProjectBySlug(slug))
    .filter((p): p is Project => p !== null);
}

export function getProjectsByMember(memberSlug: string): Project[] {
  return getAllProjects().filter(p => p.members.includes(memberSlug));
}
