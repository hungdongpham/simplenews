import styled from 'styled-components';

export const StyledRegisterPageContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.newsList.detail.background};
    padding: 30px 30px 50px 30px;
    margin: 10px 5% 0px 5%;
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.name.sectiongrey};
    border-radius: 5px;

    .title{
        padding-right: 10px;
        padding-bottom: 5px;
        font-weight: bold;
    }
    .ui.input{
        width: 240px;
    }
    .cus-row{
        padding: 5px;
    }
    .button-area{
        padding-top: 30px;
        padding-left: 10px;
    }
    .select-ctr{
        width: 240px;
    }
`;
