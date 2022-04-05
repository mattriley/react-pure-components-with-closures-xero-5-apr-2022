import React from 'react'
import { List } from 'semantic-ui-react'

const TodoList = ({todos, components}) => () => {
  const categories = Object.keys(todos)

  return (
    <List verticalAlign='middle'>
      {categories.map(category =>
        <components.Category key={category} category={category} />)}
    </List>
  )
}

export { TodoList }
