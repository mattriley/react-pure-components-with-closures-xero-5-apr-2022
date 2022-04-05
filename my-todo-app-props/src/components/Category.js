import { List } from 'semantic-ui-react'
import { TodoItem } from './TodoItem'

const Category = ({todos, category}) => {
  const todoItems = todos[category]
  .map(t => <TodoItem key={t.id} todo={t} />)

  return (
    <List.Item>
      <h2>{category}</h2>
      <List.List>
        {todoItems}
      </List.List>
    </List.Item>
  )
}

export { Category }
