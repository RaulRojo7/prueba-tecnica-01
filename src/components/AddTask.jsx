import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { addToDo, getAllToDo } from '../utils/HandleApi';
import ToDoList from '../components/ToDoList'

const AddTask = ({modal, toggle, save, setToDo}) => {

    const [text, setText] = useState(''); 


const handleChange = (e) => {
    const {name, value} = e.target
    switch (name) {
        case "text":
            setText(value)
            break;
     }
}

const handleSave = () => {
    const sts = 'I'
     addToDo(text, sts, setText, setToDo)
     let toDo = {}
     
     save(toDo)
}  
    


  return (
    <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Add Task</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label id="titulo" >Title
                        <input type="text" name="text" id="" className='form-control' value={text} onChange={handleChange} />
                        </label>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave} >Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
  )
}

export default AddTask