import { get  } from './helpers';
const HOST_URL = process.env.BACKEND_HOST;
const HEADLINE_TYPE = 'top-headlines';
const EVERYTHING_TYPE = 'everything';
const API_KEY =  process.env.API_KEY;

export const getTopHeadlines = () => {
    const url =  `${HOST_URL}${HEADLINE_TYPE}?` + 'country=us' + `&apiKey=${API_KEY}`;

    return get(url);
};

export const getEverythingByKey = (filterKey) =>{
    const url = `${HOST_URL}${EVERYTHING_TYPE}?` + `q=${filterKey}` + `&apiKey=${API_KEY}`;

    return get(url);
}

