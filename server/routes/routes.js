const router = require('express').Router();
const passport = require('passport');


const { userSignUp, userSignIn, getUserByID } = require('../controllers/authController');
const { addNote, getAllNotes, getNoteByID, editNote, deleteNote, restoreDeletedNote } = require('../controllers/noteController');

router.post('/register', userSignUp);
router.post('/signin', userSignIn);

// this is a protected route that get the user info
router.get('/me', passport.authenticate('jwt', {session:false}), getUserByID);

router.post('/note', passport.authenticate('jwt', {session:false}) ,addNote);
router.get('/note', passport.authenticate('jwt', {session:false}), getAllNotes);
router.get('/note/:id', passport.authenticate('jwt', {session:false}), getNoteByID);
router.put('/note/:id', passport.authenticate('jwt', {session:false}), editNote);
router.delete('/note/:id', passport.authenticate('jwt', {session:false}), deleteNote);
router.put('/note/restore/:id', passport.authenticate('jwt', {session:false}), restoreDeletedNote);

module.exports = router;