import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { updateToDo } from '../utils/HandleApi';

const EditTask = ({modal, toggle, idU, textU, updateTask, setToDo}) => {

    const [text, setText] = useState(''); 
   // const [toDo, setToDo] = useState([])


const handleChange = (e) => {
    
    const {name, value} = e.target
    switch (name) {
        case "text":
            setText(value)
            break;
     }
}

useEffect(() => {
    setText(text);
    
}, [])

const handleUpdate = () => {
     
    updateToDo(idU, text, setText, setToDo)
     updateTask();
     
}  
    
  return (
    <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label id="titulo" >Title
                        <input type="text" name="text" id="" className='form-control' defaultValue={textU} onChange={handleChange} ></input>
                        </label>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate} >Update</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
  )
}

export default EditTask