import bcrypt from 'bcryptjs';
import models from '../../models/index.js';
import { UserInputError } from 'apollo-server';
import { validateRegisterInput } from '../../utils/validators.js';
import generateToken from '../helpers/generateToken.js';

const register = async (
  _,
  { registerInput: { username, email, password, confirmPassword, role } }
) => {
  const { User } = models;
  const { valid, errors } = validateRegisterInput(
    username,
    email,
    password,
    confirmPassword
  );

  if (!valid) {
    throw new UserInputError('Errors', { errors });
  }

  const userName = await User.findOne({ username });
  const userEmail = await User.findOne({ email });

  if (userName) {
    throw new UserInputError('Username is taken', {
      errors: {
        username: 'This username is taken',
      },
    });
  }

  if (userEmail) {
    throw new UserInputError('Email is taken', {
      errors: {
        email: 'This email is taken',
      },
    });
  }

  password = await bcrypt.hash(password, 12);

  const newUser = new User({
    username,
    email,
    password,
    createdAt: new Date().toISOString(),
    role: 'guest',
  });

  const res = await newUser.save();

  const token = generateToken(res);

  return { ...res._doc, id: res._id, token };
};

export default register;
