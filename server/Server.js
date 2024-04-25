const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config();

const app = express()
const PORT = process.env.port || 5000
const routes = require('./routes/ToDoRoute')

app.use(express.json())
app.use(cors())

// DB conexion

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log(`Connected to MongoDB`))
.catch((err) => console.log(err))

app.use(routes);

// server up
app.listen(PORT, () => console.log(`Listening on: ${PORT}`) )

