const router = require('express').Router();
const passport = require('passport');


const { userSignUp, userSignIn } = require('../controllers/authController');
const { addNote, getAllNotes, getNoteByID } = require('../controllers/noteController');

router.post('/register', userSignUp);
router.post('/signin', userSignIn);

router.post('/note', passport.authenticate('jwt', {session:false}) ,addNote)
router.get('/note', passport.authenticate('jwt', {session:false}), getAllNotes)
router.get('/note/:id', passport.authenticate('jwt', {session:false}), getNoteByID)


module.exports = router;