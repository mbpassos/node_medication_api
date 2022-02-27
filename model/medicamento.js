const mongoose = require("mongoose")

const Medicamento = mongoose.model('Medicamento', {
  nome: {
    type: String,
    required: true,
    trim: true
  },
  farmaco: {
    type: String,
    required: true,
    trim: true
  },
  dosagem: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = Medicamento