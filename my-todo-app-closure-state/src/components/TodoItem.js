import React from 'react'
import {
  List,
  Icon,
} from 'semantic-ui-react'

const TodoItem = () => ({ todo }) => {
  const { title, note, completed } = todo
  return (
    <List.Item>
      <Icon
        color={completed ? 'teal' : 'orange' }
        name={completed ? 'check circle' : 'circle outline'} />
      <List.Content>
        <List.Header>{title}</List.Header>
        {note}
      </List.Content>
    </List.Item>
  )
}

export { TodoItem }
