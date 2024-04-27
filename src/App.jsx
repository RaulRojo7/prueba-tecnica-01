
import { useEffect, useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { addToDo, getAllToDo } from './utils/HandleApi'

function App() {
  
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpadating, setIsUpdating] = useState(false)

  useEffect(() => {
    getAllToDo(setToDo)
  }, [] )

  
  return (
    <div className='App'>
      <div className='container'>
        <h1>TODO LIST</h1>
        <div className='top'>
          <input type="text" placeholder='Agregar tarea'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <div className='add' onClick={ () => addToDo(text, setText, setToDo) }>Add Task</div>
        </div>
        <div className='list'>
          {toDo.map((item) => <ToDoList key = {item._id} text = {item.text}/>)}
          
        </div>
      </div>
    </div>
  )
}

export default App
