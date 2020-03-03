export const urlMap = {
  HOME: '/',
  ENTERTAINMENT: '/entertainment',
  BUSINESS: '/busniness',
  TRAVEL: '/travel',
  NEWS_DETAIL: '/news/:id/view',
  TOP_HEADLINES_DETAIL: '/topheadlines/:id/view',
  SIGN_UP: '/signup',
  LOG_IN: '/login'
};

export const urlConstructor = (urlMapString, params) => {
  try {
    let url = urlMapString;
    const keys = Object.keys(params);
    keys.forEach((key) => {
      const paramValue = params[key];
      if (!paramValue) {
        throw new Error(`urlConstructionError @ ${urlMapString}, ${key}: ${paramValue}`);
      }
      const regex = new RegExp(`[:]${key}`, 'gi');
      url = url.replace(regex, paramValue);
    });
    return url;
  } catch (error) {
    return '/404';
  }
};
