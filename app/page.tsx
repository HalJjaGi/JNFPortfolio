import { Metadata } from 'next';
import Link from 'next/link';
import { getAllMembers } from '@/lib/members';
import { getAllProjects } from '@/lib/projects';
import { MemberCard } from '@/components/MemberCard';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: '지원이와친구들',
  description: '개인과 팀의 성장을 기록하는 포트폴리오',
};

export default function HomePage() {
  const members = getAllMembers();
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">
            지원이와친구들
          </h1>
          <p className="mt-6 text-xl text-neutral-500 leading-relaxed">
            개인과 팀의 성장을 기록하는 공간입니다.
            <br />
            우리는 함께 만들어가고, 함께 성장합니다.
          </p>
          <div className="mt-10 flex gap-4">
            <Link 
              href="/members"
              className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
            >
              팀원 보기
            </Link>
            <Link 
              href="/projects"
              className="px-6 py-3 border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
            >
              프로젝트
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="px-6 py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light">팀원</h2>
              <p className="mt-1 text-neutral-500 text-sm">
                각자의 영역에서 전문성을 키워가는 사람들
              </p>
            </div>
            <Link 
              href="/members"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              전체 보기 →
            </Link>
          </div>

          {members.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {members.slice(0, 4).map((member) => (
                <div key={member.slug} className="stagger-item">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center border border-dashed border-neutral-300">
              <p className="text-neutral-400">아직 등록된 팀원이 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light">프로젝트</h2>
              <p className="mt-1 text-neutral-500 text-sm">
                함께 만들어낸 결과물들
              </p>
            </div>
            <Link 
              href="/projects"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              전체 보기 →
            </Link>
          </div>

          {projects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <div key={project.slug} className="stagger-item">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center border border-dashed border-neutral-300">
              <p className="text-neutral-400">아직 등록된 프로젝트가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light">About</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            지원이와친구들은 각자의 영역에서 전문성을 키워가는 사람들이
            모인 곳입니다. 우리는 프로젝트를 통해 협업하고, 
            서로의 성장을 돕습니다.
          </p>
          <div className="mt-8 flex gap-8 text-sm text-neutral-500">
            <div>
              <span className="block text-2xl font-light text-neutral-900">{members.length}</span>
              팀원
            </div>
            <div>
              <span className="block text-2xl font-light text-neutral-900">{projects.length}</span>
              프로젝트
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
