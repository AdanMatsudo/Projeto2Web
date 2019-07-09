const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate')

const Schema = mongoose.Schema;

const OrientacaoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    conteudo:{
        type: String,
        required: true
    }/*,
    professor:{
        type: Schema.Types.ObjectId,
        ref: "professores",
        required: true
    }*/
    
   // actions: [{ type: Schema.Types.ObjectId, ref: 'Professor'}]

});

OrientacaoSchema.plugin(mongoosePaginate)
mongoose.model("Orientacao", OrientacaoSchema);