
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import EditTask from './EditTask';
import { deleteToDo } from '../utils/HandleApi';

const ToDoList = ({ text,  idT, setToDo }) => {

  const [modal, setModal] = useState(false)
  //const [textU, setToDo] = useState([])

  const toggle = () =>{
    console.log(idT, text)
   setModal(!modal)
}

const updateTask = () =>{
  setModal(false)
}

const deleteU = () => {
  deleteToDo(idT, setToDo)
}

  return (
    <div className="task-list">
      <ul className="list-group ">
        <li className="list-group-item">
        <label className="form-check-label"  >
          <input className="form-check-input me-1" type="checkbox" value="" name='name' id={idT} autoComplete='name' />
          {text}</label>
          <div className='icons'>
            <BiEdit className='icon' onClick={() => setModal(true)} />
            <AiFillDelete className='icon' onClick={deleteU} />

            <EditTask  modal = {modal}  toggle = {toggle} idU = {idT} textU = {text} updateTask = {updateTask} setToDo = {setToDo} />

          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
