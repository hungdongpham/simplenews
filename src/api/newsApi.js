import { get  } from './helpers';

export const getTopHeadlines = () => {
    const url = 'http://newsapi.org/v2/top-headlines?'+'country=us&' + 'apiKey=API_KEY';

    return get(url);
};

export const getEverythingByKey = (filterKey) =>{
    const url = `http://newsapi.org/v2/everything?q=${filterKey}&apiKey=API_KEY`;

    return get(url);
}

