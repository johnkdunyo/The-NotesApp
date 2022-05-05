
const Note = require("../models/Note");
const mongoose = require('mongoose');


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

        // console.log(req.params)
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
        // check if note is deleted already
        if(note.deleted){
            return res.status(401).json({
                message: "Note already deleted"
            })
        }
        // now we can go ahead and delete the note
        note.deleted = 'true';

        await note.save();

        return res.status(201).json({
            message: "Note deleted successfully"
        })
  
        
        
    } catch (error) {
        next(error)
    }
};



exports.editNote = async(req, res, next) => {
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
        note.title = req.body.title;
        note.description = req.body.description;
        note.color = req.body.color;
        note.priority = req.body.priority;

        // save document
        await note.save();

        return res.status(201).json({
            message: "Note updated successfully"
        })

        // now update the doc and save it
        
    } catch (error) {
        next(error)
    }
};



exports.restoreDeletedNote = async(req, res, next) => {
    console.log(req)
    try {
        if(!req.user){
            return res.status(401).json({
                message: 'You need to log in order to restore this note'
            })
        };

        
        // check is the id passed is valid
        if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(401).json({
                message: "Query failed, invalid Note ID passed"
            });
        }
        const note = await Note.findById(req.params.id).exec();
        // check if note is deleted already
        if(!note.deleted){
            return res.status(401).json({
                message: "Note already restored"
            })
        }
        console.log(note)
        // now we can go ahead and restore the note
        note.deleted = 'false';

        await note.save();

        return res.status(201).json({
            message: "Note restored successfully"
        })
  
        
        
    } catch (error) {
        next(error)
    }
};