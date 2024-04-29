import axios from "axios";

const baseUrl = 'http://localhost:5000'

const getAllToDo = (setToDo) => {

    axios
    .get(baseUrl)
    .then( ({data}) => {
        console.log(' getAll data ----> ' , data);
        setToDo(data)
    })

}

const addToDo =  (text, sts, setText, setToDo) => {
    axios.post( `${baseUrl}/save `, {text, sts})
    .then((data) => {
     //   console.log(data);
        setText("");
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
} 

const updateToDo = (toDoId, text, setText, setToDo) => { 
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText = ""
      
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const deleteToDo = (toDoId, setToDo) =>{

    axios
    .post(`${baseUrl}/delete`, {_id: toDoId})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))


} 

export {getAllToDo, addToDo, updateToDo, deleteToDo}