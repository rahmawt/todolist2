const Todos = require("../models/todos")


exports.getAllTodos = (req, res) => {
    
    Todos.find().then(function(todos, err){
        if(err) {
            res.json({
                message: "Error",
            })
        }
        res.json({
            data: todos,
            message: "sukses mendapatkan data",
        })
    })

}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        // Use await to asynchronously wait for the result of findById
        const todo = await Todos.findById(id).exec();
        
        if (!todo) {
            // If no todo is found with the given ID, respond with a 404 status
            return res.status(404).json({ message: "Todo not found" });
        }
        // If todo is found, respond with a success message and the todo data
        res.json({
            data: todo,
            message: 'Successfully retrieved todo'
        });
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error('Error getting todo:', error);
        res.status(500).json({ message: "Error getting todo", error: error });
    }
}

exports.addTodo = async (req, res) => {
    try {
        // Create a new todo item based on the request body
        const newTodo = new Todo(req.body);
        // Save the todo item to the database
        await newTodo.save();
        // Respond with a success message
        res.status(201).json({ message: 'Todo item added successfully', todo: newTodo });
    } catch (err) {
        // If an error occurs, respond with an error message
        res.status(500).json({ error: err.message });
    }
};