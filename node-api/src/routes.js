const express = require('express')

const routes = express.Router()

const ProfessorController = require ('./controllers/ProfessorController')
const OrientacaoController = require ('./controllers/OrientacaoController')

routes.get('/professors', ProfessorController.index)
routes.post('/professors', ProfessorController.store)
routes.get('/professors/:id', ProfessorController.show)
routes.put('/professors/:id', ProfessorController.update)
routes.delete('/professors/:id', ProfessorController.destroy)

routes.get('/orientacoes', OrientacaoController.index)
routes.post('/orientacoes', OrientacaoController.store)
routes.get('/orientacoes/:id', OrientacaoController.show)
routes.put('/orientacoes/:id', OrientacaoController.update)
routes.delete('/orientacoes/:id', OrientacaoController.destroy)

module.exports = routes