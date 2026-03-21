import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMemberBySlug, getMemberSlugs } from '@/lib/members';
import { getProjectsByMember } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { TechBadge } from '@/components/TechBadge';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getMemberSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  
  if (!member) {
    return { title: '팀원을 찾을 수 없습니다' };
  }

  return {
    title: `${member.name} | 지원이와친구들`,
    description: member.bio,
  };
}

export default async function MemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const projects = getProjectsByMember(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="px-6 py-16 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            {member.avatar && (
              <div className="w-24 h-24 rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
                <img 
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-light">{member.name}</h1>
              <p className="mt-1 text-neutral-500">{member.role}</p>
            </div>
          </div>

          <div className="mt-8 text-neutral-600 leading-relaxed whitespace-pre-line">
            {member.bio}
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h2 className="text-sm text-neutral-400 mb-3">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex gap-4">
            {member.links.github && (
              <a 
                href={member.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-neutral-900 underline"
              >
                GitHub
              </a>
            )}
            {member.links.email && (
              <a 
                href={`mailto:${member.links.email}`}
                className="text-sm text-neutral-500 hover:text-neutral-900 underline"
              >
                Email
              </a>
            )}
            {member.links.twitter && (
              <a 
                href={member.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-neutral-900 underline"
              >
                Twitter
              </a>
            )}
            {member.links.linkedin && (
              <a 
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-neutral-900 underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light">프로젝트</h2>

          {projects.length === 0 ? (
            <p className="mt-8 text-neutral-400">참여한 프로젝트가 없습니다.</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
