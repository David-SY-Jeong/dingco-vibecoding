'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 애니메이션을 위한 useEffect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 슬라이더 자동 전환
  const features = [
    { title: "실무 중심 교육", description: "현업에서 바로 사용할 수 있는 실제 개발 프로세스를 배웁니다." },
    { title: "재미있는 코딩", description: "지루한 이론보다는 흥미로운 프로젝트로 자연스럽게 학습합니다." },
    { title: "개인 맞춤 피드백", description: "1:1 코드 리뷰와 개인별 성장 경로를 제시합니다." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  const courses = [
    {
      title: "웹 개발 풀스택",
      description: "React, Next.js, Node.js로 완성하는 현대적 웹 개발",
      level: "초급~고급",
      duration: "12주",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "모바일 앱 개발",
      description: "React Native로 iOS/Android 앱 동시 개발",
      level: "중급",
      duration: "10주",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "백엔드 마스터",
      description: "Node.js, 데이터베이스, 클라우드 배포까지",
      level: "중급~고급",
      duration: "8주",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* 헤더 */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            딩코딩코
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#courses" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">강의</a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">소개</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">문의</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              수강신청
            </button>
            {/* 모바일 메뉴 버튼 */}
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* 모바일 메뉴 */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              <a 
                href="#courses" 
                className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                강의
              </a>
              <a 
                href="#about" 
                className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                소개
              </a>
              <a 
                href="#contact" 
                className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                문의
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                수강신청
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className={`pt-24 pb-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient">
              바이브코딩
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              딩코딩코와 함께하는 <span className="font-semibold text-blue-600">재미있고 실무적인</span> 프로그래밍 여정
            </p>
          </div>
          
          {/* 특징 슬라이더 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="h-24 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                  {features[currentSlide].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {features[currentSlide].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              무료 체험 시작하기
            </button>
            <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300">
              강의 미리보기
            </button>
          </div>
        </div>
      </section>

      {/* 강의 섹션 */}
      <section id="courses" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">
            인기 강의 코스
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`${course.color} p-8 rounded-2xl text-white hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="mb-6 opacity-90">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="opacity-80">난이도:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">기간:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                </div>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">
                  자세히 보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-300">수강생</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-slate-600 dark:text-slate-300">만족도</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-slate-600 dark:text-slate-300">강의 과정</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-300">지원</div>
            </div>
          </div>
        </div>
      </section>

      {/* 수강생 후기 섹션 */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">
            수강생들의 생생한 후기
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "바이브코딩 덕분에 프로그래밍이 이렇게 재미있는 줄 몰랐어요. 실무에서 바로 써먹을 수 있는 내용들로 가득해서 정말 만족합니다!"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  김
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-slate-800 dark:text-white">김민수</div>
                  <div className="text-sm text-slate-500">웹 개발 풀스택 코스</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "개인 맞춤 피드백이 정말 좋았어요. 딩코딩코 선생님이 제 코드를 하나하나 봐주시면서 어떻게 개선할 수 있는지 알려주셨어요."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  이
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-slate-800 dark:text-white">이지혜</div>
                  <div className="text-sm text-slate-500">모바일 앱 개발 코스</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "백엔드 마스터 코스를 들은 후 실제 회사에서 바로 적용할 수 있었어요. 실무 중심의 커리큘럼이 정말 도움이 됐습니다!"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  박
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-slate-800 dark:text-white">박준호</div>
                  <div className="text-sm text-slate-500">백엔드 마스터 코스</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white">
              왜 바이브코딩인가?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              딩코딩코의 바이브코딩은 단순히 코드를 가르치는 것이 아닙니다. 
              개발자로서의 사고방식, 문제 해결 능력, 그리고 무엇보다 
              <span className="font-semibold text-blue-600"> 코딩의 즐거움</span>을 전달합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover-lift animate-fadeInUp">
                <div className="text-3xl mb-4 animate-float">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">실무 중심 커리큘럼</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  현업 개발자들이 직접 설계한 실무 기반 프로젝트로 학습합니다.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover-lift animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl mb-4 animate-float" style={{ animationDelay: '1s' }}>🚀</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">개인 맞춤 학습</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  각자의 수준과 목표에 맞는 개인별 학습 경로를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer id="contact" className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                딩코딩코
              </div>
              <p className="text-slate-300">
                재미있고 실무적인 코딩 교육의 새로운 패러다임
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">빠른 링크</h4>
              <div className="space-y-2">
                <a href="#courses" className="block text-slate-300 hover:text-white transition-colors">강의 목록</a>
                <a href="#about" className="block text-slate-300 hover:text-white transition-colors">회사 소개</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">학습 가이드</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">문의하기</h4>
              <div className="space-y-2 text-slate-300">
                <p>📧 hello@dingcodingco.com</p>
                <p>📞 02-1234-5678</p>
                <p>💬 카카오톡: @바이브코딩</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 딩코딩코. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
