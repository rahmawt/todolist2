const express = require('express')
const router = express.Router()
const TodosCtrl = require('../../controllers/todos')

router.get('/', TodosCtrl.getAllTodos)
router.get('/:id', TodosCtrl.getTodoById)
router.post('/', TodosCtrl.addTodo)


module.exports = router