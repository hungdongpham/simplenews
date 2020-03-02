const supportedBrowsers = {
  chrome: 57,
  firefox: 60,
  safari: 11,
  ie: 11,
  edge: 17
};

const isSupported = (browser, version) => {
  const browserSupported = !!supportedBrowsers[browser];
  const versionSupported = parseInt(version, 10) >= supportedBrowsers[browser];
  return browserSupported && versionSupported;
};

export default function detectBrowser() {
  const userAgentString = navigator && navigator.userAgent;

  const browsers = [
    { name: 'chrome', rule: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/ },
    { name: 'ie', rule: /MSIE\s(7\.0)/ },
    { name: 'ie', rule: /MSIE\s([0-9.]+);.*Trident\/[4-7].0/ },
    { name: 'ie', rule: /Trident\/7\.0.*rv:([0-9.]+).*\).*Gecko$/ },
    { name: 'safari', rule: /Version\/([0-9._]+).*Safari/ },
    { name: 'firefox', rule: /Firefox\/([0-9.]+)(?:\s|$)/ },
    // supported browsers ^
    { name: 'opera', rule: /Opera\/([0-9.]+)(?:\s|$)/ },
    { name: 'opera', rule: /OPR\/([0-9.]+)(:?\s|$)$/ },
    { name: 'android', rule: /Android\s([0-9.]+)/ },
    { name: 'ios', rule: /Version\/([0-9._]+).*Mobile.*Safari.*/ },
    { name: 'aol', rule: /AOLShield\/([0-9._]+)/ },
    { name: 'edge', rule: /Edge\/([0-9._]+)/ },
    { name: 'yandexbrowser', rule: /YaBrowser\/([0-9._]+)/ },
    { name: 'vivaldi', rule: /Vivaldi\/([0-9.]+)/ },
    { name: 'kakaotalk', rule: /KAKAOTALK\s([0-9.]+)/ },
    { name: 'samsung', rule: /SamsungBrowser\/([0-9.]+)/ },
    { name: 'phantomjs', rule: /PhantomJS\/([0-9.]+)(:?\s|$)/ },
    { name: 'crios', rule: /CriOS\/([0-9.]+)(:?\s|$)/ },
    { name: 'fxios', rule: /FxiOS\/([0-9.]+)/ },
    { name: 'bb10', rule: /BB10;\sTouch.*Version\/([0-9.]+)/ },
    { name: 'facebook', rule: /FBAV\/([0-9.]+)/ },
    { name: 'instagram', rule: /Instagram\s([0-9.]+)/ },
    { name: 'ios-webview', rule: /AppleWebKit\/([0-9.]+).*Mobile/ }
  ];

  let version;
  const detected = browsers.find((browser) => {
    const match = browser.rule.exec(userAgentString);
    if (match) {
      version = match[1].split(/[._]/).slice(0, 3);
      return true;
    }
    return false;
  });

  if (version && version.length < 3) {
    version = version.concat(version.length === 1 ? [0, 0] : [0]);
  }
  detected.version = version.join('.');
  detected.supported = isSupported(detected.name, detected.version);

  return detected;
}
