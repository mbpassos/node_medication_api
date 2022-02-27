const express = require('express')
const router = express.Router()
const medicamentoController = require("../controllers/medicamentoController.js")


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get("/medicamentos", medicamentoController.index)

router.get("/medicamentos/:id", medicamentoController.show)

router.post("/medicamentos", medicamentoController.store) 

router.put("/medicamentos/:_id", medicamentoController.update) 

router.delete("/medicamentos/:_id", medicamentoController.destroy) 

module.exports = router