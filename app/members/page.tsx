import { Metadata } from 'next';
import { getAllMembers } from '@/lib/members';
import { MemberCard } from '@/components/MemberCard';

export const metadata: Metadata = {
  title: '팀원 | 지원이와친구들',
  description: '지원이와친구들 팀원들의 포트폴리오',
};

export default function MembersPage() {
  const members = getAllMembers();

  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light">팀원</h1>
          <p className="mt-2 text-neutral-500">
            각자의 영역에서 전문성을 키워가는 사람들
          </p>

          {members.length === 0 ? (
            <div className="mt-16 text-center py-16 border border-dashed border-neutral-300">
              <p className="text-neutral-400">아직 등록된 팀원이 없습니다.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {members.map((member) => (
                <MemberCard key={member.slug} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
