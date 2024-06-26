const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {

    const {text, status} = req.body

    ToDoModel
    .create({text, status})
    .then((data) => {
        console.log('Added...');
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send('Updated..!'))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndDelete(_id, {text})
    .then(() => res.send('Deleted..!'))
    .catch((err) => console.log(err))
}



