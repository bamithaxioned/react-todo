import React from 'react';

const TodoLists = ({lists, removeTodos, editTodos, completedTodos}) => {
  return (
    <>
      <section className="list-data">
        <div className="wrapper">
          {lists.length > 0 ?
            <ul className='todo-list-containers'>
              <li key='0' className='todolists'>
                <h2>Id</h2>
                <h3>Task Name</h3>
                <h4>Edit</h4>
                <h4>Remove</h4>
                <h5>Completed</h5>
              </li>
              {lists.map((list, index) => 
                <li key={index + 1} className='todolists'>
                  <h2>{index + 1}</h2>
                  <h3>{list.todo}</h3>
                  <h3><a href="#FIXME" title='Edit' className='edit-btn' onClick={e => editTodos(list.id)}>Edit</a></h3>
                  <h3><a href="#FIXME" title='Remove' className='delete-btn' onClick={e => removeTodos(list.id)}>Remove</a></h3>
                  <h4><input type="checkbox" name="" id="" onClick={e => completedTodos(list.id)} /></h4>
                </li>
              )}
            </ul>
            :
          <h2>No Todo's Found</h2>}
        </div>
      </section>
    </>
  )
}

export default TodoLists