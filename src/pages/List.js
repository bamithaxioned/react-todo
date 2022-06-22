import React, { useState } from 'react';
import TodoLists from '../components/TodoLists';

const List = ({completed}) => {
  const localStorageList = JSON.parse(localStorage.getItem('rc-todo-list')) || [];
  const [list, setList] = useState(localStorageList);
  console.log(list);
  console.log(completed);
  
  return (
    <>
      <section className="lists">
        <div className="wrapper">
          <h2 className='center'>View Todo List</h2>
          {localStorageList.length > 0 ?
            <ul className='todo-list-containers m-auto' data-completed={completed}>
              <li key='0' className='todolists'>
                <h2>Id</h2>
                <h3>Task Name</h3>
                <h5>Status</h5>
              </li>
              {localStorageList.map((list, index) => 
                { completed ?
                  <li key={index + 1} className='todolists'>
                    <h2>{index + 1}</h2>
                    <h3>{list.todo}</h3>
                  </li>
                :
                  <li key={index + 1} className='todolists'>
                    <h2>{index + 1}</h2>
                    <h3>{list.todo}</h3>
                    <h4>{list.completed ? 'Completed' : 'Pending'}</h4>
                  </li>
                }
              )}
            </ul>
            :
            null
          }
        </div>
      </section>
    </>
  )
}

export default List