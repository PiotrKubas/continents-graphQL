import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CONTINENT_INFO } from '../../GraphQL/Queries';
import { Wrapper, Grid, GridItem } from './ContinentItem.style';

interface ContinentItemProps {
    continent: {
        name: string;
        countries: [
            {
                name: string;
                emoji: string;
                languages: [
                    {
                        name: string;
                    }
                ];
            }
        ];
    };
}

interface RouteParams {
    id: string;
}

const ContinentItem = () => {
    const { id } = useParams<RouteParams>();

    const { data } = useQuery<ContinentItemProps>(GET_CONTINENT_INFO, {
        variables: { code: id.toUpperCase() },
    });
    console.log(data);
    return (
        <Wrapper>
            <Grid>
                {data
                    ? data.continent?.countries?.map((item) => (
                          <GridItem>
                              <div>{item.name}</div>
                              <div>{item.emoji}</div>
                              <div>{item.languages[0]?.name}</div>
                          </GridItem>
                      ))
                    : 'Loading...'}
            </Grid>
        </Wrapper>
    );
};

export default ContinentItem;
