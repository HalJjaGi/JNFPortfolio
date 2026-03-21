import Link from 'next/link';
import { Member } from '@/lib/members';

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Link href={`/members/${member.slug}`}>
      <article className="group p-6 border border-neutral-200 hover:border-neutral-400 transition-colors">
        <div className="flex items-start gap-4">
          {member.avatar && (
            <div className="w-16 h-16 rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-lg group-hover:underline">
              {member.name}
            </h3>
            <p className="text-neutral-500 text-sm">{member.role}</p>
          </div>
        </div>
        <p className="mt-4 text-neutral-600 text-sm line-clamp-2">
          {member.bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.slice(0, 4).map((skill) => (
            <span 
              key={skill}
              className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
