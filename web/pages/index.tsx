import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { TodoForm } from '../Components/TodoForm'
import TodoList from '../Components/TodoList'
import TodoContextWrapper from '../Context/todoContext'
import { client } from '../graphql/client'
0
const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <TodoContextWrapper>
        <TodoForm />
        <TodoList />
      </TodoContextWrapper>
    </ApolloProvider>
  )
}

export default Home
