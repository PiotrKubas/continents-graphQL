import React from 'react';
import { useQuery } from '@apollo/client';
import StyledLink from '../../components/StyledLink';
import { GET_CONTINENTS } from '../../GraphQL/Queries';
import { Wrapper, Card, Name } from './ContinentsList.style';

interface ContinentsProps {
    continents: [
        {
            name: string;
            code: string;
        }
    ];
}

const ContinentsList = () => {
    const { data } = useQuery<ContinentsProps>(GET_CONTINENTS);

    return (
        <Wrapper>
            {data
                ? data.continents.map((item) => (
                      <StyledLink to={`/continents/${item.code}`}>
                          <Card>
                              <Name>{item.name}</Name>
                              <div>{item.code}</div>
                          </Card>
                      </StyledLink>
                  ))
                : 'Loading...'}
        </Wrapper>
    );
};

export default ContinentsList;
