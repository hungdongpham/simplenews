
// functions to transform string case

export const capWords = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));

export const camelCaseWords = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toLowerCase() + txt.substr(1));

export const titleCase = (str) => {
  const titleWords = [];
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i += 1) {
    titleWords[i] = capWords(words[i]);
  }
  return titleWords.join(' ');
};

export const truncate = ( str, number) => {
  if(str) return str.length > number ? str.substring(0, number - 3) + "..." : str;
  return '';
};