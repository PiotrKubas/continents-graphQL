import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CONTINENT_INFO } from '../../GraphQL/Queries';

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

    return (
        <div>
            {data
                ? data.continent?.countries?.map((item) => (
                      <div>{item.name}</div>
                  ))
                : 'Loading...'}
        </div>
    );
};

export default ContinentItem;
