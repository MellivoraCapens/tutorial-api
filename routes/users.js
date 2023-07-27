const express = require('express');
const { 
    getUsers, 
    getUser, 
    updateUser, 
    createUser, 
    deleteUser } = require('../controllers/users');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin'));

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;