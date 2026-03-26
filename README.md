# 지원이와친구들 포트폴리오

팀원 각자의 역량과 성과를 정리하는 포트폴리오 웹사이트

## 기술 스택

- **프레임워크:** Next.js 16 (App Router)
- **언어:** TypeScript
- **스타일:** Tailwind CSS
- **콘텐츠:** YAML + js-yaml
- **배포:** Cloudflare Pages (정적 빌드)

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build  # out/ 폴더에 정적 파일 생성
```

---

## 팀원 추가하기

### 1. YAML 파일 생성

`content/members/` 폴더에 `{slug}.yaml` 파일 생성

```yaml
# content/members/my-name.yaml

slug: my-name  # URL에 사용될 고유 ID
name: 홍길동
role: 풀스택 개발자
bio: |
  안녕하세요! 홍길동입니다.
  여러 줄로 작성할 수 있습니다.
avatar: /images/members/my-name.jpg

skills:
  - React
  - Next.js
  - TypeScript
  - Node.js

links:
  github: https://github.com/username
  email: email@example.com
  # twitter: https://twitter.com/username
  # linkedin: https://linkedin.com/in/username

# 참여한 프로젝트 슬러그 목록
projects:
  - project-slug-1
  - project-slug-2

# (선택) 경력 타임라인
experience:
  - period: 2023.01 - 현재
    title: 시니어 개발자
    company: (주)회사명
    description: 웹 서비스 개발 및 운영
  - period: 2021.03 - 2022.12
    title: 주니어 개발자
    company: 스타트업
    description: 프론트엔드 개발
```

### 2. 아바타 이미지 추가

`public/images/members/` 폴더에 이미지 추가

```bash
public/images/members/my-name.jpg
```

---

## 프로젝트 추가하기

### 1. YAML 파일 생성

`content/projects/` 폴더에 `{slug}.yaml` 파일 생성

```yaml
# content/projects/my-project.yaml

slug: my-project
title: 프로젝트 이름
summary: 한 줄 요약 (1-2문장)

description: |
  ## 문제
  해결하고자 했던 문제를 설명하세요.
  
  ## 접근 방식
  어떻게 문제를 해결했는지 설명하세요.
  
  ## 결과
  결과와 성과를 설명하세요.

techStack:
  - Next.js
  - TypeScript
  - Tailwind CSS

# 참여한 팀원 슬러그 목록
members:
  - my-name

links:
  demo: https://example.com
  github: https://github.com/username/repo
  # docs: https://docs.example.com

# 스크린샷 이미지 경로
images:
  - /images/projects/my-project-1.png
  - /images/projects/my-project-2.png

# 개발 기간
period: 2025.01 - 2025.03

# 하이라이트 / 성과
highlights:
  - 성과 1
  - 성과 2

# (선택) 상태
# status: live  # live | in-development | archived
```

### 2. 프로젝트 이미지 추가

`public/images/projects/` 폴더에 이미지 추가

```bash
public/images/projects/my-project-1.png
public/images/projects/my-project-2.png
```

---

## 배포

### Cloudflare Pages (자동)

GitHub 레포와 연결하면 자동 배포됨

### 수동 배포

```bash
npm run build
npx wrangler pages deploy out --project-name=jnf-portfolio
```

---

## 폴더 구조

```
├── app/                    # Next.js 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈
│   ├── members/           # 팀원 페이지
│   └── projects/          # 프로젝트 페이지
├── components/            # 재사용 컴포넌트
├── content/               # YAML 데이터
│   ├── members/          # 팀원 데이터
│   └── projects/         # 프로젝트 데이터
├── lib/                   # 데이터 로드 유틸
├── public/                # 정적 파일
│   └── images/
│       ├── members/      # 팀원 아바타
│       └── projects/     # 프로젝트 스크린샷
└── out/                   # 빌드 결과 (gitignore)
```

---

## 템플릿

- `content/members/_template.yaml` - 팀원 템플릿
- `content/projects/_template.yaml` - 프로젝트 템플릿
