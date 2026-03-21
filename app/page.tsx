import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '지원이와친구들',
  description: '개인과 팀의 성장을 기록하는 포트폴리오',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
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
              className="px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
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

      {/* About */}
      <section className="px-6 py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light">About</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            지원이와친구들은 각자의 영역에서 전문성을 키워가는 사람들이
            모인 곳입니다. 우리는 프로젝트를 통해 협업하고, 
            서로의 성장을 돕습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
