import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';
import { getMemberBySlug } from '@/lib/members';
import { TechBadge } from '@/components/TechBadge';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: '프로젝트를 찾을 수 없습니다' };
  }

  return {
    title: `${project.title} | 지원이와친구들`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const members = project.members
    .map(m => getMemberBySlug(m))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      {project.images[0] && (
        <div className="w-full aspect-video bg-neutral-100">
          <img 
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header>
            <h1 className="text-4xl font-light">{project.title}</h1>
            <p className="mt-4 text-xl text-neutral-500">{project.summary}</p>
            
            {project.period && (
              <p className="mt-4 text-sm text-neutral-400">{project.period}</p>
            )}
          </header>

          {/* Links */}
          <div className="mt-8 flex gap-4">
            {project.links.demo && (
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors text-sm"
              >
                데모 보기
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-sm"
              >
                GitHub
              </a>
            )}
            {project.links.docs && (
              <a 
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-sm"
              >
                문서
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h2 className="text-sm text-neutral-400 mb-3">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-12 prose prose-neutral max-w-none">
            <div className="text-neutral-600 leading-relaxed whitespace-pre-line">
              {project.description}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-light mb-4">성과</h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-600">
                    <span className="text-neutral-400">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Team */}
          <div className="mt-12">
            <h2 className="text-sm text-neutral-400 mb-4">참여 팀원</h2>
            <div className="flex flex-wrap gap-4">
              {members.map((member) => member && (
                <Link 
                  key={member.slug}
                  href={`/members/${member.slug}`}
                  className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-neutral-400 transition-colors"
                >
                  {member.avatar && (
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-neutral-500">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div className="mt-12">
              <h2 className="text-sm text-neutral-400 mb-4">스크린샷</h2>
              <div className="grid gap-4">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="bg-neutral-100 overflow-hidden">
                    <img 
                      src={img}
                      alt={`${project.title} 스크린샷 ${i + 2}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
