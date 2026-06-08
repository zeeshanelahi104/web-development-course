const mongoose = require('mongoose');
const User = require('../models/user.model');

// CREATE a new user
const createUser = async (request, response) => {
  try {
    const user = await User.create(request.body);
    return response.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      return response.status(409).json({ message: 'Email already exists' });
    }
    return response.status(400).json({ message: error.message });
  }
};

// READ all users
const getUsers = async (request, response) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // sort by newest first
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

// READ a single user by id
const getUserById = async (request, response) => {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid user id' });
    }

    const user = await User.findById(id);

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

// UPDATE a user by id
const updateUser = async (request, response) => {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid user id' });
    }

    const user = await User.findByIdAndUpdate(id, request.body, {
      new: true, // return the updated document
      runValidators: true,
    });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).json(user);
  } catch (error) {
    if (error.code === 11000) {
      return response.status(409).json({ message: 'Email already exists' });
    }
    return response.status(400).json({ message: error.message });
  }
};

// DELETE a user by id
const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid user id' });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).json({ message: 'User deleted successfully', user });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
