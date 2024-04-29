
import { useEffect, useState } from 'react'
import './App.css'
 
import { addToDo, getAllToDo } from './utils/HandleApi'
import ToDoList from './components/ToDoList'
import AddTask from './components/AddTask'

function App() {
  
   const [toDo, setToDo] = useState([])
   const [text, setText] = useState("")
   const [isUpadating, setIsUpdating] = useState(false)

   const [modal, setModal] = useState(false)

   const toggle = () =>{
    setModal(!modal)
}

   useEffect(() => {
     getAllToDo(setToDo)

     
   }, [] )

  const saveTask = () => {
    setModal(false)
    // getAllToDo(setToDo)
  }

  return (
    <>
    <div className='header text-center'>
                <h3>TODO LIST</h3>
                <button className='btn btn-primary mt-2' id= "addButton" onClick={() => setModal(true)}>Add task</button>
            </div>
            <div className='task-container'>
            <div className='list'>
             {toDo.map((item) => <ToDoList key = {item._id} text = {item.text} idT =  {item._id} setToDo = {setToDo} />)}
             <AddTask toggle = {toggle} modal = {modal} save = {saveTask} setToDo = {setToDo}  />
          
        </div>
            </div>
    
    
     
    </>
  )
}

export default App
