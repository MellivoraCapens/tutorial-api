const User = require('../models/user');

exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user
        })
    } catch(error) {
        console.error('Failed', error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    };
}

exports.getUser = async (req, res) => {
    try {
        
    } catch(error) {
        console.error('Not Found', error);
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}