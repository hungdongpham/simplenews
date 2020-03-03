import React from 'react';
import getText from 'context/language/getText';
import { StyledNewsItem} from './styledNewsList';
import Link from 'components/common/links/Link';
import { urlConstructor, urlMap } from 'routes/urlMap';

export const generateNewsRow = ( news ) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  } = news;

  const publishedDate = new Date(publishedAt).toLocaleDateString('en-US');
  const encodeTitle = encodeURI(title);

  return (<StyledNewsItem>
    <img className="img" src={urlToImage} alt="" />
    <Link to={urlConstructor(urlMap.NEWS_DETAIL, { id: encodeTitle })}><h2 className="title">{title}</h2></Link>
    <div className="author">{getText('newsList.by')} {author} ({publishedDate})</div>
    <div className="more">
        <Link to={urlConstructor(urlMap.NEWS_DETAIL, { id: encodeTitle })}>
            {getText('newsList.viewMore')}
        </Link>
    </div>
  </StyledNewsItem>);
};

export const generateRowData = (newsArray) => {
  const rowData = newsArray.map(news => generateNewsRow(
    news
  ));

  return rowData;
};
