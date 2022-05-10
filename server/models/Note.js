const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// create not schema
const NoteSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        default: 'white',
        enum: ['white', 'warning', 'success', 'dark', 'purple', 'danger', 'info', 'primary'],
        required: true
    },
    priority: {
        type: String,
        default: 'low',
        enum: ['low', 'medium', 'high'],
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    deleted: {
        type: Boolean,
        default: false
    },
    // reminder: {
    //     type: Boolean,
    //     default: false
    // },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});


module.exports = mongoose.model('Note', NoteSchema);