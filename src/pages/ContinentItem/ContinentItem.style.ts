import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: max-content;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Grid = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 150px;
    padding: 10px;
    margin: 8px;
    background-color: #8a8db1;
    border: 1px solid rgb(156, 156, 156);
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`;
