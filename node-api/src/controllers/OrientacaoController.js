const mongoose = require('mongoose')

const Orientacao = mongoose.model('Orientacao')

module.exports = {
    async index(req, res){
        const {page = 1} = req.query
        const oritentacoes = await Orientacao.paginate({},{page, limit: 10});

        return res.json(oritentacoes)
    },

    async show(req, res){
        const oritentacoes = await Orientacao.findById(req.params.id)

        return res.json(oritentacoes)
    },

    async store(req, res){
        const oritentacoes = await Orientacao.create(req.body)

        return res.json(oritentacoes)
    },

    async update(req, res){
        const oritentacoes = await Orientacao.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })
        
        return res.json(oritentacoes)
    },

    async destroy(req, res){
        const oritentacoes = await Orientacao.findByIdAndRemove(req.params.id)

        return res.send()
    }
}