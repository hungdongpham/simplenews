import React from 'react';
import getText from 'context/language/getText';
import { StyledNewsItem} from './styledTopHeadlineList';
import Link from 'components/common/links/Link';
import { urlConstructor, urlMap } from 'routes/urlMap';

export const generateNewsRow = ( headlineNews ) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  } = headlineNews;

  const publishedDate = new Date(publishedAt).toLocaleDateString('en-US');
  const encodeTitle = encodeURI(title);

  return (<StyledNewsItem>
    <Link to={urlConstructor(urlMap.TOP_HEADLINES_DETAIL, { id: encodeTitle })}>
      <img className="img" src={urlToImage} alt="" />
      <div className="info">
        <h2 className="title">{title}</h2>
      </div>
    </Link>
  </StyledNewsItem>);
};

export const generateRowData = (headlineNewsArray) => {
  const rowData = headlineNewsArray.map(headlineNews => generateNewsRow(
    headlineNews
  ));

  return rowData;
};
