import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
    {
        continents {
            name
            code
        }
    }
`;
