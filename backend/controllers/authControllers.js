import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});
// @desc    Register a new user
// @route   POST /api/auth
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, username, email, password } = req.body;

	const emailExists = await User.findOne({ email });
	const usernameExists = await User.findOne({ username });

	if (emailExists || usernameExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		name,
		username,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error('Invalid User');
	}
});

// @desc    Get user profile
// @route   GET /api/auth/:id
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Get user profile
// @route   GET /api/auth/update
// @access  Private
const updatePassword = asyncHandler(async (req, res) => {
	//const { email } = req.body;
	const user = await User.findById(req.params.id);

	if (user) {
		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedPassword = await user.save();

		res.json(updatedPassword);
	} else {
		res.status(400);
		throw new Error('User not found');
	}
});

export { authUser, registerUser, getUserProfile, updatePassword };
