const asyncHandler = require('../middleware/async');
const ErrorRespose = require('../utils/errorResponse');
const User = require('../models/user');

// @desc    register user
// @route   POST /api/v1/auth/register
// @access  public
 exports.register = asyncHandler(async (req, res, next) => {
   const { name, email, password, role } = req.body;

   const user = await User.create({
      name,
      email,
      password,
      role
   });

   res.status(200).json({ success: true });
 });