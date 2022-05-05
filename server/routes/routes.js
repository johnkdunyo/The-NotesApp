const router = require('express').Router();
const passport = require('passport');


const { userSignUp, userSignIn } = require('../controllers/authController');
const { addNote, getAllNotes, getNoteByID, editNote, deleteNote, restoreDeletedNote } = require('../controllers/noteController');

router.post('/register', userSignUp);
router.post('/signin', userSignIn);

router.post('/note', passport.authenticate('jwt', {session:false}) ,addNote);
router.get('/note', passport.authenticate('jwt', {session:false}), getAllNotes);
router.get('/note/:id', passport.authenticate('jwt', {session:false}), getNoteByID);
router.put('/note/:id', passport.authenticate('jwt', {session:false}), editNote);
router.delete('/note/:id', passport.authenticate('jwt', {session:false}), deleteNote);
router.put('/note/restore/:id', passport.authenticate('jwt', {session:false}), restoreDeletedNote);

module.exports = router;