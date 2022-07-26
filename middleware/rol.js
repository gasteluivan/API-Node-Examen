const { handleHttpError } = require("../utils/handleError");
const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    // console.log({ user });
    const rolesByUser = user.role;

    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    );
    if (!checkValueRol) {
      handleHttpError(res, "No tienes permisos para realizar esta acción", 401);
      return;
    }
    next();
  } catch (e) {
    handleHttpError(res, "Error con los permisos", 403);
  }
};

module.exports = { checkRol };
