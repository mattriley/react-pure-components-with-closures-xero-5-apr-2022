import { List } from 'semantic-ui-react'

const Category = ({todos, components}) => ({category}) => {
  const todoItems = todos[category]
  .map(t => <components.TodoItem key={t.id} todo={t} />)

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
