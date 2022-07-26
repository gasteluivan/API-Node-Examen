const ENGINE_DB = process.env.ENGINE_DB;

// pasar los datos del usuario
const getProperties = async (user) => {
  const data = {
    nosql: {
      _id: "_id",
    },
    mysql: {
      id: "id",
    },
  };

  return data[ENGINE_DB];
};

module.exports = getProperties;
