const express = require("express")
const router = express.Router()

router.use("/todo", require('./api/todo'))

module.exports = router