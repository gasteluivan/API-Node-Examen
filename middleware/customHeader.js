const customHeader = (req, res, next) => {
  try {
    const apikey = req.headers.api_key;
    if (apikey === "12345") {
      console.log(req.headers);
      next();
    } else {
      res.status(401).send({
        message: "Invalid API key",
      });
    }
  } catch (e) {
    res.status(403).send({ error: e.message });
  }
};
module.exports = customHeader;
