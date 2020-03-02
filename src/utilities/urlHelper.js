export const revertEditURLToOrigin = (url) => {
    if (url.includes('/edit')) {
        const parts = url.split('/');
        url = url.replace(parts[parts.length - 2], ':id');
    }
    return url;
};


export const getIdFromEditURL = (url) => {
    let id = '';
    if (url.includes('/edit')) {
        const parts = url.split('/');
        id = parts[parts.length - 2]
    }
    return id;
};

