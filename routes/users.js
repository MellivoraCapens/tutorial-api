const express = require('express');
const { 
    getUsers, 
    getUser, 
    updateUser, 
    createUser, 
    deleteUser } = require('../controllers/users');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
    .route('/')
    .get(getUsers)
    .post(protect, createUser);

router
    .route('/:id')
    .get(getUser)
    .put(protect, updateUser)
    .delete(protect, deleteUser);

module.exports = router;