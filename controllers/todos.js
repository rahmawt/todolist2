const Todos = require("../models/todos")


module.exports.getAllTodos = (req, res) => {
    
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

module.exports.getTodoById = async (req, res) => {
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

module.exports.addTodo = async (req, res) => {
    try {
        // Create a new todo item based on the request body
        const newTodo = new Todos(req.body);
        // Save the todo item to the database
        await newTodo.save();
        // Respond with a success message
        res.status(201).json({ message: 'Todo item added successfully', todo: newTodo });
    } catch (err) {
        // If an error occurs, respond with an error message
        res.status(500).json({ error: err.message });
    }
}

module.exports.deleteTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        // Find the todo item by ID and delete it
        const deletedTodo = await Todos.findByIdAndDelete(id);
        if (!deletedTodo) {
            // If the todo with the given ID is not found, respond with a 404 status code
            return res.status(404).json({ error: 'Todo not found' });
        }
        // Respond with a success message
        res.status(200).json({ message: 'Todo item deleted successfully', deletedTodo });
    } catch (err) {
        // If an error occurs, respond with an error message
        res.status(500).json({ error: err.message });
    }
}

module.exports.updateTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        // Find the todo item by ID and update it
        const updatedTodo = await Todos.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTodo) {
            // If the todo with the given ID is not found, respond with a 404 status code
            return res.status(404).json({ error: 'Todo not found' });
        }
        // Respond with a success message
        res.status(200).json({ message: 'Todo item updated successfully', updatedTodo });
    } catch (err) {
        // If an error occurs, respond with an error message
        res.status(500).json({ error: err.message });
    }
}
