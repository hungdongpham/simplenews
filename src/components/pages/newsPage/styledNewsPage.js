import styled from 'styled-components';

export const StyledNewsDetailContainer = styled.div`
    display: block;
    background-color: ${({ theme }) => theme.colors.newsList.detail.background};
    padding: 30px 30px 50px 30px;
    margin: 10px 5% 0px 5%;
    .title{
        font-size: 26px;
        font-weight: bold;
    }
    .img{
        max-width: 50%;
        padding: 20px 0px;
    }
    .description{
        padding: 10px 0px;
    }
    .content{
        padding-bottom: 50px;
    }
    .backLink{
        display: block;
        text-transform: capitalize;
    }
    .originalLink{
        margin-bottom: 10px;
    }
`;