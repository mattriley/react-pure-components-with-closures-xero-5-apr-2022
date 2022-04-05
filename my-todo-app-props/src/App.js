import React from 'react'

import './App.css'
import { todos } from './data/todos'
import { TodoList } from './components/TodoList'

const App = () => {
  return (
    <div className='row'>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
