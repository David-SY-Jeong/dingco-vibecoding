# 바이브코딩 - 딩코딩코의 프로그래밍 강의 사이트

딩코딩코의 **바이브코딩** 프로그래밍 강의 사이트입니다. 재미있고 실무적인 코딩 교육을 제공하는 현대적이고 반응형 웹사이트입니다.

## 🚀 주요 기능

- **현대적인 디자인**: 깔끔하고 모던한 UI/UX
- **완전 반응형**: 모바일, 태블릿, 데스크탑 모든 기기에서 최적화
- **다크 모드 지원**: 사용자 환경설정에 따른 자동 테마 전환
- **애니메이션 효과**: 부드러운 페이지 전환과 인터랙션
- **강의 소개**: 다양한 프로그래밍 강의 코스 정보
- **수강생 후기**: 실제 수강생들의 생생한 후기
- **실시간 슬라이더**: 핵심 특징을 강조하는 자동 슬라이더

## 🛠 기술 스택

- **Frontend**: Next.js 15.5.2, React 19.1.0
- **스타일링**: Tailwind CSS 4.0
- **타입스크립트**: 완전한 타입 안정성
- **빌드 도구**: Turbopack (Next.js 내장)
- **폰트**: Geist Sans, Geist Mono

## 📁 프로젝트 구조

```
dingco-vibecoding-site/
├── src/
│   └── app/
│       ├── globals.css          # 전역 스타일 및 커스텀 애니메이션
│       ├── layout.tsx           # 루트 레이아웃 컴포넌트
│       ├── page.tsx             # 메인 홈페이지 컴포넌트
│       └── favicon.ico          # 사이트 아이콘
├── public/                      # 정적 자산
├── package.json                 # 프로젝트 의존성
├── next.config.ts              # Next.js 설정
├── tailwind.config.ts          # Tailwind CSS 설정
├── tsconfig.json               # TypeScript 설정
└── README.md                   # 프로젝트 문서
```

## 🏃‍♂️ 시작하기

### 필수 요구사항

- Node.js 18+ 
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/David-SY-Jeong/dingco-vibecoding.git
   cd dingco-vibecoding
   ```

2. **의존성 설치**
   ```bash
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   ```

3. **개발 서버 시작**
   ```bash
   npm run dev
   # 또는
   yarn dev
   # 또는
   pnpm dev
   ```

4. **브라우저에서 확인**
   [http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

## 🎨 주요 컴포넌트

### 메인 페이지 (`src/app/page.tsx`)
- **헤더 네비게이션**: 반응형 메뉴와 모바일 햄버거 메뉴
- **히어로 섹션**: 그라디언트 애니메이션과 특징 슬라이더
- **강의 코스**: 3개의 주요 강의 과정 소개
- **통계 섹션**: 수강생 수, 만족도 등의 핵심 지표
- **수강생 후기**: 5점 만점 별점과 실제 후기
- **소개 섹션**: 바이브코딩의 차별화된 특징
- **푸터**: 연락처 정보와 빠른 링크

### 스타일링 (`src/app/globals.css`)
- **커스텀 애니메이션**: float, fadeInUp, gradient-shift
- **반응형 디자인**: 모바일 우선 접근법
- **호버 효과**: 부드러운 상호작용
- **다크 모드**: 자동 색상 전환

## 🚀 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
npm start
```

### Vercel 배포
이 프로젝트는 Vercel에서 쉽게 배포할 수 있습니다:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/David-SY-Jeong/dingco-vibecoding)

## 📱 반응형 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px ~ 1024px  
- **데스크탑**: > 1024px

## 🎯 향후 개선 계획

- [ ] 강의 상세 페이지 추가
- [ ] 수강신청 기능 구현
- [ ] 관리자 대시보드 개발
- [ ] SEO 최적화 강화
- [ ] 다국어 지원
- [ ] PWA 기능 추가

## 🤝 기여하기

프로젝트 개선을 위한 기여를 환영합니다!

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📞 연락처

- **이메일**: hello@dingcodingco.com
- **전화**: 02-1234-5678
- **카카오톡**: @바이브코딩

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

---

⭐ 이 프로젝트가 도움이 되었다면 별점을 남겨주세요!