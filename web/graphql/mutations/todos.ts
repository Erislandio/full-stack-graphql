import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
    mutation CreateNewTodo($title: String!, $description: String!) {
		createTodo(input: { title: $title, description: $description}) {
			id
            title
            description
            done
            createdAt
        }
    }
`;