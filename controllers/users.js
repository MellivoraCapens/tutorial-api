const User = require('../models/user');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    show all users
// @route   GET /api/v1/users
// @access  public
exports.getUsers = asyncHandler(async (req, res, next) => {
        const users = await User.find();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
});

// @desc    show single user
// @route   GET /api/v1/users/:id
// @access  public
exports.getUser = asyncHandler(async (req, res, next) => {
        const user = await User.findById(req.params.id);

        if(!user) {
             return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: user
        });
});

// @desc    update user
// @route   PUT /api/v1/users/:id
// @access  private
exports.updateUser = asyncHandler(async (req, res, next) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!user) {
            return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404));
        }
    
        res.status(200).json({
            success: true,
            data: user
        });
});

// @desc    create user
// @route   POST /api/v1/users
// @access  private
exports.createUser = asyncHandler(async (req, res, next) => {
        const user = await User.create(req.body);

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc    delete user
// @route   DELETE /api/v1/users/:id
// @access  private
exports.deleteUser = asyncHandler(async (req, res, next) => {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user) {
            return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: {}
        });
});