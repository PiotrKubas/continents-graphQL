import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_CONTINENTS } from '../../GraphQL/Queries';

interface ContinentProps {
    continents: [
        {
            name: string;
            code: string;
        }
    ];
}

const Continents = () => {
    const { data } = useQuery<ContinentProps>(GET_CONTINENTS);

    useEffect(() => {
        console.log(data?.continents);
    }, [data]);

    return (
        <div>
            {data
                ? data.continents.map((item) => <div>{item.name}</div>)
                : 'Loading...'}
        </div>
    );
};

export default Continents;
