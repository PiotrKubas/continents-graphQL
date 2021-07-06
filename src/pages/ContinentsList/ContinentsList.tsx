import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CONTINENTS } from '../../GraphQL/Queries';

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
        <div>
            {data
                ? data.continents.map((item) => (
                      <div>
                          <Link to={`/continents/${item.code.toLowerCase()}`}>
                              <div>{item.name}</div>
                          </Link>
                      </div>
                  ))
                : 'Loading...'}
        </div>
    );
};

export default ContinentsList;
