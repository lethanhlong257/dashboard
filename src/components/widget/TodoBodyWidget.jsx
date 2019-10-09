import React, { useState } from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'

import './Widget.style.scss'

const todoListData = [
  {
    id: 1,
    content: 'Lam cai nay',
    isDone: true,
  },
  {
    id: 2,
    content: 'Choi cai kia',
    isDone: false,
  },
  {
    id: 3,
    content: 'Do notthing',
    isDone: true,
  },
  {
    id: 4,
    content: 'Just test for fun',
    isDone: true,
  },
  {
    id: 5,
    content: 'The free job, I will do when free',
    isDone: false,
  },
  {
    id: 6,
    content: 'what the hell is that',
    isDone: false,
  },
  {
    id: 7,
    content: 'haha hihi',
    isDone: true,
  }
]

function TodoBodyWidget() {
  const [todoLists, setTodoLists] = useState(todoListData)
  const [todoListsTemp, setTodoListsTemp] = useState(todoListData)
  const [count, setCount] = useState(0)

  function todoItemClick(id) {
    for (let i = 0; i < todoLists.length; i++) {
      const todo = todoLists[i];
      if (todo.id === id) {
        todoLists[i] = { ...todo, isDone: !todo.isDone }
      }
    }
    setTodoLists(todoLists)
    setTodoListsTemp(updateParentFromChildArray(todoListsTemp, todoLists))
    setCount(count + 1)
  }

  function todoBtnClick(list, type) {
    if (type === 'all') setTodoLists(list)
    if (type === 'active') setTodoLists(list.filter(item => item.isDone === false))
    if (type === 'completed') setTodoLists(list.filter(item => item.isDone === true))
    setTodoListsTemp(list)
  }
  return (
    <div className='todo'>
      <p className='todo__header'>What needs to be done?</p>
      <Row>
        <Col>2 items left</Col>
        <Col>
          <span className="todo__btn" onClick={()=>{todoBtnClick(todoListsTemp, 'all')}}>All</span>
          <span className="todo__btn" onClick={()=>{todoBtnClick(todoListsTemp, 'active')}}>Active</span>
          <span className="todo__btn" onClick={()=>{todoBtnClick(todoListsTemp, 'completed')}}>Completed</span>
        </Col>
      </Row>
      <ListGroup variant="flush" className='todo__list'>
        {
          todoLists.map(todo => (
            <ListGroup.Item className='todo__item' key={todo.id}>
              <input type="checkbox" checked={todo.isDone} onChange={() => { todoItemClick(todo.id) }} className='todo__chk-item' id={`todo-item-${todo.id}`} />
              <label className={todo.isDone ? 'todo-item--done' : null} for={`todo-item-${todo.id}`}>{todo.content}</label>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}

function updateParentFromChildArray(parents, childs) {
  for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];
    for (let j = 0; j < childs.length; j++) {
      const child = childs[j];
      if (parent.id === child.id) {
        parents[i] =  childs[j]
      }
    }
  }
  return parents
}


TodoBodyWidget.propTypes = {

}

export default TodoBodyWidget

