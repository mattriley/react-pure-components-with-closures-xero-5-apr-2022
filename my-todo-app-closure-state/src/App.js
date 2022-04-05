import React from 'react'

import './App.css'
import { todos } from './data/todos'
import { TodoList } from './components/TodoList'
import { Category } from './components/Category'
import { TodoItem } from './components/TodoItem';

const components = {}
components.TodoItem = TodoItem()
components.Category = Category({todos, components})
components.TodoList = TodoList({todos, components})

const App = () => {
  return (
    <div className='row'>
      <components.TodoList />
    </div>
  )
}

export default App;
