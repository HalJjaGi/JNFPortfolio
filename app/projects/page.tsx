import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: '프로젝트 | 지원이와친구들',
  description: '지원이와친구들의 프로젝트 모음',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light">프로젝트</h1>
          <p className="mt-2 text-neutral-500">
            함께 만들어온 것들
          </p>

          {projects.length === 0 ? (
            <div className="mt-16 text-center py-16 border border-dashed border-neutral-300">
              <p className="text-neutral-400">아직 등록된 프로젝트가 없습니다.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
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
