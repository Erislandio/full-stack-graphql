import { gql } from '@apollo/client';

export const TODOS = gql`
  query Todos($limit: Float!, $offset: Float!) {
      todos(input:{ limit: $limit, offset: $offset}){
        id
        title
        done
        description
        createdAt
        updatedAt
    }
  }
`