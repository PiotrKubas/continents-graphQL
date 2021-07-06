import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
    {
        continents {
            name
            code
        }
    }
`;

export const GET_CONTINENT_INFO = gql`
    query getContinent($code: ID!) {
        continent(code: $code) {
            name
            code
            countries {
                name
                emoji
                languages {
                    name
                }
            }
        }
    }
`;
