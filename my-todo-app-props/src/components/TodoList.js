import React from 'react'
import { List } from 'semantic-ui-react'
import { Category } from './Category'

const TodoList = ({todos}) => {
  const categories = Object.keys(todos)

  return (
    <List verticalAlign='middle'>
      {categories.map(category =>
        <Category key={category} todos={todos} category={category} />)}
    </List>
  )
}

export { TodoList }
