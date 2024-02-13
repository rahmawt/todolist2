const express = require("express")
const app = express()
const mongoose = require("mongoose")
const logger = require("morgan")
const bodyParser = require("body-parser")
const Todos = require("./models/todos")
const TodosCtrl = require('./controllers/todos')


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todo-api').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

//Middleware
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/', (require, response) => {
    response.end("Hello world")
})

app.get("/todo/:name", (req, res) => {
    const name = req.params.name

    const todo = new Todos({ name });
    todo.save().then(() => {
        res.json({
            message: "data berhasil disimpan",
        })
    })
})

//Routes
app.use('/api', require("./routes/api"))
// app.post('/api/todo', TodosCtrl.addTodo);
// app.delete('/api/todo/:id', TodosCtrl.deleteTodoById)
// app.put('/api/todo/:id', TodosCtrl.updateTodoById)

app.listen(3003, () => {
    console.log(`Server started @ http://localhost:3003`)
})