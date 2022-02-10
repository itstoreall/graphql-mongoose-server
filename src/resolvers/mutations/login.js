import bcrypt from 'bcryptjs';
import models from '../../models/index.js';
import { UserInputError } from 'apollo-server';
import { validateLoginInput } from '../../utils/validators.js';
import generateToken from '../helpers/generateToken.js';

const login = async (_, { username, password }) => {
  const { User } = models;
  const { errors, valid } = validateLoginInput(username, password);

  if (!valid) {
    throw new UserInputError('Validation error', { errors });
  }

  const user = await User.findOne({ username });

  if (!user) {
    errors.general = 'User not found';
    throw new UserInputError('Wrong credentials', { errors });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    errors.general = 'Wrong credentials';
    throw new UserInputError('Wrong credentials', { errors });
  }

  const token = generateToken(user);

  return { ...user._doc, id: user._id, token };
};

export default login;
