const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// pasar los datos del usuario
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

const verifyToken = async (tokenjws) => {
  try {
    return jwt.verify(tokenjws, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
