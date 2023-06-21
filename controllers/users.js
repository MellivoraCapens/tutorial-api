const User = require('../models/user');

exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user
        })
    } catch(error) {
        console.error('failed', error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    };
}