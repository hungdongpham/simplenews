const isValidUrl = (string) => {
  try {
    const urlTest = new URL(string);
    return !!urlTest;
  } catch (_) {
    return false;
  }
};

export default isValidUrl;
