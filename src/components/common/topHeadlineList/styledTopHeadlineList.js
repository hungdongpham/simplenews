import styled from 'styled-components';

export const StyledHeadlineNewsListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.headlineNewsList.background};
`;

export const StyledNewsItem = styled.div`
    background-color: ${({ theme }) => theme.colors.headlineNewsList.background_item};
    flex: 25%;
    max-width: 25%;
    padding: 0;
    position: relative;
    text-align: left;

    @media (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
    }

    @media (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
    }

    .info{
        position: absolute;
        bottom: 10px;
        padding: 15px;
        .title{
            font-size: 16px;
            color: ${({ theme }) => theme.colors.headlineNewsList.title};
        }
    }
    .img{
        max-width: 100%;
        min-height: 100%;
        padding: 8px;
        vertical-align: middle;
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