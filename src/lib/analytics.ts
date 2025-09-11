// 구글 애널리틱스 이벤트 추적 유틸리티 함수들

// GA4 추적 ID (환경 변수에서 가져오거나 기본값 사용)
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-S5J45DF4L8';

// 이벤트 매개변수 타입 정의
type EventParameters = Record<string, string | number | boolean | undefined>;

// GA4 이벤트 추적 함수
export const trackEvent = (eventName: string, parameters?: EventParameters) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters
    });
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
  }
};

// 버튼 클릭 추적
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location || 'unknown'
  });
};

// 링크 클릭 추적
export const trackLinkClick = (linkText: string, destination: string) => {
  trackEvent('link_click', {
    link_text: linkText,
    link_destination: destination
  });
};

// 폼 제출 추적
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName
  });
};

// 스크롤 깊이 추적
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth
  });
};

// 사용자 상호작용 추적
export const trackUserInteraction = (interactionType: string, details?: string) => {
  trackEvent('user_interaction', {
    interaction_type: interactionType,
    interaction_details: details || 'unknown'
  });
};

// 전역 gtag 타입 선언
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: EventParameters) => void;
    dataLayer: unknown[];
  }
}