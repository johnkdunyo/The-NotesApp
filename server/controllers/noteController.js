
const Note = require("../models/Note");


exports.addNote = async(req, res, next) => {
    try {
        const user = req.user;
        if(!user){
            return res.status(401).json({
                message: 'You need to log in  in order to add a new note'
            })
        }

        // create new note from req body
        const newNote = new Note(req.body);
        newNote.user = user.id;

        await newNote.save();

        return res.status(201).json({
            message: "Note created and saved successfully"
        })

        
    } catch (error) {
        next(error)
    }
};

// get all notes for the user
exports.getAllNotes = async(req, res, next)=> {
    try {
        if(!req.user){
            return res.status(401).json({
                message: 'You need to log in order to get all notes'
            })
        };

        const allNotes = await Note.find({user: req.user.id}).populate('user').exec();
        // the populate replaces user's id in the appointment doc with the user's objec doc

        return res.status(200).json({
            message: "Query successfully",
            data: allNotes
        })
        
    } catch (error) {
        next(error)
    }
};


exports.getNoteByID = async(req, res, next) => {
    try {
        if(!req.user){
            return res.status(401).json({
                message: 'You need to log in order to delete this note'
            })
        };

        // check is the id passed is valid
        if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(401).json({
                message: "Query failed, invalid Note ID passed"
            });
        }
        const note = await Note.findById(req.params.id).exec();
        return res.status(200).json({
            message: "Query successfully",
            data: note
        })
        
    } catch (error) {
        next(error)
    }
};



exports.deleteNote = async(req, res, next) => {
    try {
        if(!req.user){
            return res.status(401).json({
                message: 'You need to log in order to delete this note'
            })
        };

        // check is the id passed is valid
        if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(401).json({
                message: "Query failed, invalid Note ID passed"
            });
        }
        const note = await Note.findById(req.params.id).exec();
        note.deleted = 'true';

        await note.save();

        return res.status(201).json({
            message: "Note deleted successfully"
        })
  
        
        
    } catch (error) {
        next(error)
    }
}