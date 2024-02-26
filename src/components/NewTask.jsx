import React, { useState } from 'react'

const NewTask = ({onAdd}) => {

    const [enterdTask, setEnteredTask] = useState('');

    function hnadleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enterdTask.trim() === ''){
            return;
        }
        onAdd(enterdTask)
        setEnteredTask('')
    }
  return <div children='flex items-center gap-4'>
    <input type='text' 
    className='w-64 px-2 py-1 rounded-sm bg-stone-200'
    onChange={hnadleChange}/>
    <button className='text-stone-700 hover:text-stone-950 mx-4' onClick={handleClick}>Add Task</button>
  </div>
}

export default NewTask 