import { AiFillDelete } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"

export const ToDoList = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
      <div className="text">
        {text}
      </div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  )
}
