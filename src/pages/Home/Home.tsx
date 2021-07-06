import React from 'react';
import StyledLink from '../../components/StyledLink';
import { Wrapper, Title } from './Home.style';

const Home = () => {
    return (
        <Wrapper>
            <StyledLink to="/continents">
                <Title>Go to continent list</Title>
            </StyledLink>
        </Wrapper>
    );
};

export default Home;
