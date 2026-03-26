import { Experience } from '@/lib/members';

interface Props {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: Props) {
  return (
    <div className="mt-12">
      <h2 className="text-sm text-neutral-400 mb-6">경력</h2>
      <div className="relative border-l-2 border-neutral-100 pl-6 space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-neutral-200" />
            
            <div className="space-y-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm text-neutral-400">{exp.period}</span>
              </div>
              <h3 className="font-medium">{exp.title}</h3>
              <p className="text-sm text-neutral-500">{exp.company}</p>
              {exp.description && (
                <p className="text-sm text-neutral-600 mt-2">{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
