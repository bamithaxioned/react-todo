import React, { useEffect, useState } from 'react';
import TodoLists from '../components/TodoLists';

const Home = () => {
  const addTodoValue = 'Add Todo..';
  const updateTodoValue = 'Update Todo..';
  const localStorageList = JSON.parse(localStorage.getItem('rc-todo-list')) || [];
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] =  useState(localStorageList);
  const [submitBtn, setSubmitBtn] =  useState({
    value: addTodoValue,
    btnIsActive: false,
  });
  const [editTodoId, setEditTodoId] = useState('');

  useEffect(() => {
    localStorage.setItem('rc-todo-list', JSON.stringify(todoList));
  }, [[todoList]])
  
  // Delete todo
  const removeTodos = (id) => {
    // check if update mode is on
    if(submitBtn.btnIsActive) {
      alert('Please completed the updation process');
    } else {
      const list = todoList.filter(todos => todos.id !== id);
      setTodoList(list);
    }
  }

  // Edit Todo
  const editTodos = (id) => {
    const selectedTodo = todoList.filter(todos => todos.id === id);
    setTodo(selectedTodo[0].todo);
    setSubmitBtn({
      value: updateTodoValue,
      btnIsActive: true,
    });
    setEditTodoId(id);
  }

  // Delete Todo
  const handleCancel = (e) => {
    e.preventDefault();
    setTodo('');
    setSubmitBtn({
      value: addTodoValue,
      btnIsActive: false, 
    });
  }

  // Completed Todo
  const handleCompleted = (id) => {
    // check if update mode is on
    if(submitBtn.btnIsActive) {
      alert('Please completed the updation process');
    } else {
      const completedTodoList = todoList.map(todos => {
        if(todos.id === id) {
          todos.completed = todos.completed ? false : true; //if completed is true make it false and vica versa
        }
        return todos;
      });
      setTodoList(completedTodoList);
    }
  }

  // Add/Update todo on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentSubmitBtn = e.target.querySelector('.submit-btn').value.trim();
    // Add Todo
    if(currentSubmitBtn === addTodoValue) {
      const uniqueId = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
      let todoValueList = {
        id: uniqueId,
        todo: todo,
        completed: false,
      }

      if(todo) {
        let tempArr = todoList;
        tempArr.push(todoValueList);
        setTodoList(tempArr);
        setTodo('');
      } else {
        alert('Todo cannot be empty');
      }
    } else { //update todo
      const updatedTodoList = todoList.map(todos => {
        if(todos.id === editTodoId) { todos.todo = todo; }
        return todos;
      });
      setTodoList(updatedTodoList);
      setTodo('');
      setSubmitBtn({
        value: addTodoValue,
        btnIsActive: false,
      });
    }
  }

  return (
    <>
      <section className='forms'>
        <div className="wrapper">
          <form className='todo-form' onSubmit={handleSubmit} >
            <div className="input-wrapper">
              <label htmlFor=""></label>
              <input type="text" value={todo} placeholder='Add Todo...' onChange={e => setTodo(e.target.value)} name="todo" />
            </div>
            {<input type="submit" value={submitBtn.value} className='submit-btn' />}
            {submitBtn.btnIsActive && <button onClick={e => handleCancel(e)}>Cancel</button> }
          </form>
        </div>
      </section>
      <TodoLists lists={todoList} removeTodos={removeTodos} editTodos={editTodos} completedTodos={handleCompleted} />
    </>
  )
}

export default Home