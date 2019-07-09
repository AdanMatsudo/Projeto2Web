const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate')

const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
    nome: {
        type: String,
        required: true
    }

   // actions: [{ type: Schema.Types.ObjectId, ref: 'Professor'}]

});

ProfessorSchema.plugin(mongoosePaginate)

mongoose.model("Professor", ProfessorSchema);