export const revertEditURLToOrigin = (url) => {
    if (url.includes('/edit')) {
        const parts = url.split('/');
        url = url.replace(parts[parts.length - 2], ':id');
    }
    return url;
};


export const getIdFromViewURL = (url) => {
    let id = '';
    if (url.includes('/view')) {
        const parts = url.split('/');
        id = parts[parts.length - 2]
    }
    return id;
};

export const extractNewsIdFromUrl = () => {
    const url = window.location.pathname;
    return getIdFromViewURL(url);
}

export const checkTopHeadlinesUrl = () => {
    const url = window.location.pathname;
    if(url.includes('/topheadlines')) return true;
    return false;
}