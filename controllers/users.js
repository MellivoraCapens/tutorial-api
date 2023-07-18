const User = require('../models/user');

// @desc    show all users
// @route   GET /api/v1/users
// @access  public
exports.getUsers = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all users' });
};

// @desc    show single user
// @route   GET /api/v1/users/:id
// @access  public
exports.getUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show user ${req.params.id}` });
};

// @desc    update user
// @route   PUT /api/v1/users/:id
// @access  private
exports.updateUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update user ${req.params.id}` });
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
exports.deleteUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete user ${req.params.id}` });
};