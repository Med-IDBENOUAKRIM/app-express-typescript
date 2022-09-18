import jwt from 'jsonwebtoken';

const createAccessToken = (payload: string | object) => {
  try {
    const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: 3600,
    });
    return access_token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default createAccessToken;
