

const yellow = '#FFDC00';
const black = '#071013';
const lightestgrey = '#f9f9f9';
const lightgrey = '#f8f8f8';
const grey = '#aaa';
const darkgrey = '#77878B';
const shadowgrey = '#f0f0f0';
const sectiongrey = '#110a33';
const red = '#DD1C1A';
const green = '#29BC30';
const blue = '#003d6b';
const white = '#ffffff';
const brightgrey='#c8c9c7';
const transparent = 'transparent';


const name = {
  lightgrey,
  lightestgrey,
  brightgrey,
  grey,
  darkgrey,
  shadowgrey,
  sectiongrey,
  red,
  yellow,
  blue,
  green,
  black,
  white,
};

const panel = {
  footer: {
    foreground: white,
    background: transparent,
  },
  header: {
    foreground: white,
    background: transparent,
  },
  navigation: {
    background: transparent,
    foreground: white
  },
  main: {
    filter: '80%',
    foreground: white,
    background: lightgrey
  },
  error: {
    foreground: red,
    background: yellow
  },
};

const newsList = {
  background: white,
  background_item: white,
  detail:{
    background: white,
  }
};

const headlineNewsList = {
  background: white,
  title: white,
};

const customSwitch = {
  base: {
    color: white, 
    focus: green
  },
  track:{
    border: grey,
    background: grey,
    transition: '',
  }
};

const button = {
  default: lightgrey,
};

export default {
  name,
  panel,
  button,
  newsList,
  headlineNewsList,
  customSwitch
};
