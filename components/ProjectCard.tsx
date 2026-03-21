import Link from 'next/link';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="group border border-neutral-200 hover:border-neutral-400 transition-colors overflow-hidden">
        {project.images[0] && (
          <div className="aspect-video bg-neutral-100 overflow-hidden">
            <img 
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-medium text-lg group-hover:underline">
            {project.title}
          </h3>
          <p className="mt-2 text-neutral-600 text-sm line-clamp-2">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span 
                key={tech}
                className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.period && (
            <p className="mt-3 text-neutral-400 text-xs">{project.period}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
