const handleHttpError = (res, message = "Algo sucedio", code = 403) => {
  res.status(code).send({ message });
};
module.exports = { handleHttpError };
