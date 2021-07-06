import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    background-color: #8a8db1;
    margin: 15px;
    width: 140px;
    height: 140px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid rgb(156, 156, 156);
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
    display: flex;
    &:hover {
        box-shadow: 0 5px 15px 0px rgba(46, 60, 83, 0.5);
        transform: translateY(-4px);
    }
`;

export const Name = styled.div`
    font-size: 1.3rem;
    text-align: center;
`;
