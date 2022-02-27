const Medicamento = require("../model/medicamento.js")

const show = (req, res) => {
  Medicamento.findById(req.params.id).then((medicamento) => {
    res.json(medicamento ? medicamento : {})
  }).catch(() => res.status(400).json({ error: "ocorrreu erro" }))
}

const store = (req, res) => {
  const medicamento = new Medicamento({ nome: req.body.nome, farmaco: req.body.farmaco, dosagem: req.body.dosagem });
  medicamento.save().then((medicamento) => {
    res.status(201).json(medicamento)
  }).catch((e) => res.status(400).json({ error: "ocorreu um erro ao gravar" }))
}

const outroNome = async (req, res) => {
  try {
    const result = await Medicamento.updateOne(req.params, req.body)
    res.json({ updated: result.nModified == 1 })
  } catch (e) {
    res.status(400).json({ error: "ocorreu um erro ao atualizar" })
  }
}

const destroy = (req, res) => {
  Medicamento.deleteOne(req.params).then((result) => {
    res.json({ deleted: result.deletedCount > 0 })
  }).catch(() => res.status(400).json({ error: "ocorreu um erro ao apagar" }))
}

module.exports = {
  index: async (req, res) => {
    try {
      const medicamentos = await Medicamento.find({})
      res.json(medicamentos)
    } catch (e) { res.status(400).json({ error: "ocorrreu erro" }) }
  },
  show,
  store,
  update: outroNome,
  destroy
}