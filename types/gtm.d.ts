type PageViewEvent = {
  event: "page_view";
  page: string;
};

// 이미 설정한 PageViewEvent에 대해서는 엄격한 타입 체크를,
// 앞으로 추가될 이벤트를 위해 Record<string, any>를 사용해
// 아직 정의되지 않은 다른 이벤트에 대해서는 유연성을 확보.
// TODO: 이벤트 타입 설정 fix 되면 union type으로 변경
export type GTMEvent =
  | PageViewEvent
  | {
      event: string;
      [key: string]: any;
    };

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

export {};
