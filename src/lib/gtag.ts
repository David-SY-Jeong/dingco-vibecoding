// 구글 애널리틱스 gtag 설정 및 디버깅 유틸리티

// GA4 추적 ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-S5J45DF4L8';

// GA 이벤트 데이터 타입 정의
type GAEventData = {
  command: string;
  targetId: string;
  config?: Record<string, string | number | boolean | undefined>;
};

// gtag 함수 타입 정의
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, string | number | boolean | undefined>) => void;
  }
}

// gtag 함수 초기화
export const initGtag = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(command: string, targetId: string, config?: Record<string, string | number | boolean | undefined>) {
      const eventData: GAEventData = { 
        command, 
        targetId 
      };
      if (config) {
        eventData.config = config;
      }
      (window.dataLayer as GAEventData[]).push(eventData);
    };
    
    // 디버그 모드에서 콘솔 로그 출력
    if (process.env.NODE_ENV === 'development') {
      console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
    }
  }
};

// 페이지 뷰 추적
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title || document.title,
      page_location: url,
      send_page_view: true
    });
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Page view tracked:', { url, title });
    }
  }
};

// 이벤트 추적
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean | undefined>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Event tracked:', { eventName, parameters });
    }
  }
};

// 구글 애널리틱스 연결 상태 확인
export const checkGAConnection = () => {
  if (typeof window !== 'undefined') {
    const hasGtag = typeof window.gtag === 'function';
    const hasDataLayer = Array.isArray(window.dataLayer);
    
    console.log('GA Connection Status:', {
      hasGtag,
      hasDataLayer,
      dataLayerLength: (window.dataLayer as unknown[])?.length || 0
    });
    
    return hasGtag && hasDataLayer;
  }
  return false;
};

// 구글 애널리틱스 스크립트 로드 확인
export const checkGAScriptLoaded = () => {
  if (typeof window !== 'undefined') {
    const script = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
    const isLoaded = !!script;
    
    console.log('GA Script Status:', {
      isLoaded,
      scriptSrc: script?.getAttribute('src')
    });
    
    return isLoaded;
  }
  return false;
};