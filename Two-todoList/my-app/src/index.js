import React from 'react'
import {createRoot }from 'react-dom/client'
import TodoList from './compent/todolist'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<TodoList></TodoList>)
