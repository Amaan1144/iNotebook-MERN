const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    description: {
        type: String,
        required: true,
        min: 3,
    },
    tag: {
        type: String,
        default: "General",
        min: 3,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })

module.exports = mongoose.model('Notes', NotesSchema)