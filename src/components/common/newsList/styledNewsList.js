import styled from 'styled-components';

export const StyledNewsListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.newsList.background};
`;

export const StyledNewsItem = styled.div`
    background-color: ${({ theme }) => theme.colors.newsList.background_item};
    width: 200px;
    margin: 10px;
    padding: 10px;
    text-align: left;
    .img{
        max-width: 100%;
    }
    .title{
        font-size: 16px;
    }
    .description{
        font-size: 13px;
    }
    .author{
        font-size: 12px;
    }
    .more{
        font-size: 12px;
        float: right;
    }
`;