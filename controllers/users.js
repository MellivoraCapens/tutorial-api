const User = require('../models/user');

// @desc    show all users
// @route   GET /api/v1/users
// @access  public
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

// @desc    show single user
// @route   GET /api/v1/users/:id
// @access  public
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

// @desc    update user
// @route   PUT /api/v1/users/:id
// @access  private
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!user) {
            res.status(400).json({ success: false });
        }
    
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

// @desc    create user
// @route   POST /api/v1/users
// @access  private
exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

    res.status(200).json({
        success: true,
        data: user
    });
    } catch(err) {
        res.status(400).json({success: false });
    };
};

// @desc    delete user
// @route   DELETE /api/v1/users/:id
// @access  private
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user) {
            res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};