const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
// router.patch('/:id', updateUser); // if you want to allow partial updates (only some fields), use PATCH instead of PUT
router.delete('/:id', deleteUser);

module.exports = router;
