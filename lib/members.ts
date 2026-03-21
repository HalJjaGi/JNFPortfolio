import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDir = path.join(process.cwd(), 'content');

export interface Member {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  skills: string[];
  links: {
    github?: string;
    email?: string;
    twitter?: string;
    linkedin?: string;
  };
  projects: string[];
}

export function getMemberSlugs(): string[] {
  const membersDir = path.join(contentDir, 'members');
  const files = fs.readdirSync(membersDir);
  return files
    .filter(f => f.endsWith('.yaml') && !f.startsWith('_'))
    .map(f => f.replace(/\.yaml$/, ''));
}

export function getMemberBySlug(slug: string): Member | null {
  try {
    const filePath = path.join(contentDir, 'members', `${slug}.yaml`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as Member;
  } catch {
    return null;
  }
}

export function getAllMembers(): Member[] {
  const slugs = getMemberSlugs();
  return slugs
    .map(slug => getMemberBySlug(slug))
    .filter((m): m is Member => m !== null);
}
