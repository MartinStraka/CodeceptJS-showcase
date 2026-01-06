/// <reference types='codeceptjs' />
type RestHelper = import('./helpers/RestHelper');
type CommonHelper = import('./helpers/CommonHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, REST, JSONResponse, RestHelper, CommonHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
