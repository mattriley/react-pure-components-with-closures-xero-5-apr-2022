import React from 'react'
import { useSelector } from 'react-redux'

import './App.css'
import { TodoList } from './components/TodoList'
import { getTodos } from './selectors/todos.selector'

const App = () => {
  const todos = useSelector(getTodos)

  return (
    <div className='row'>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
