import React, { useEffect, useState } from 'react';
import TodoLists from '../components/TodoLists';

const Home = () => {
  const todoValue = 'Add Todo..';
  const updateTodoValue = 'Update Todo..';
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] =  useState([]);
  const [submitBtn, setSubmitBtn] =  useState({
    value: todoValue,
    btnIsActive: false,
  });

  const [editTodoId, setEditTodoId] = useState('');

  // Delete todo
  const removeTodos = (id) => {
    const list = todoList.filter(todos => todos.id !== id);
    setTodoList(list);
  }

  const editTodos = (id) => {
    const selectedTodo = todoList.filter(todos => todos.id == id);
    setTodo(selectedTodo[0].todo);
    setSubmitBtn({
      value: updateTodoValue,
      btnIsActive: true, 
    });
    setEditTodoId(id);
  }

  const handleUpdate = () => {
    const selectedTodo = todoList.find(todos => todos.id === editTodoId);
    console.log(selectedTodo);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setTodo('');
    setSubmitBtn({
      value: todoValue,
      btnIsActive: false, 
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add todos
    const uniqueId = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    let todoValue = {
      id: uniqueId,
      todo: todo,
    }
    
    if(todo) {
      let tempArr = todoList;
      tempArr.push(todoValue);
      setTodoList(tempArr);
      setTodo('');
    } else {
      alert('Todo cannot be empty');
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
            {!submitBtn.btnIsActive && <input type="submit" value={submitBtn.value} className='submit-btn' />}
            {submitBtn.btnIsActive && 
            <>
              <button onClick={e => handleUpdate(e)}>Update</button>
              <button onClick={e => handleCancel(e)}>Cancel</button>
            </>}
          </form>
        </div>
      </section>
      <TodoLists lists={todoList} removeTodos={removeTodos} editTodos={editTodos} />
    </>
  )
}

export default Home