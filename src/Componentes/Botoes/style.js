import styled from 'styled-components';

export const EstiloBotoes = styled.div`
    width: 100%;
    height: calc(100% - 110px);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 10px;
`;