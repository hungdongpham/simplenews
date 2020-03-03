import styled from 'styled-components';

export const StyledNewsListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.newsList.background};
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.name.sectiongrey};
    border-radius: 5px;
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
    a, a.default_link{
        text-decoration: none;
    }
    .title{
        padding: 10px 0px;
        font-size: 16px;
        color: black;
        text-decoration: none;
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
        font-style: italic;
    }
`;