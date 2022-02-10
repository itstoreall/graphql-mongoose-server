import jwt from 'jsonwebtoken';

const generateToken = user => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: '7d' }
  );

  return token;
};

export default generateToken;
