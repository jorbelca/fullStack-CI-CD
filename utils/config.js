require("dotenv").config()

 if (mode === "test"){const URL = secrets.MONGO_URI} else {const URL = process.env.MONGO_URI}
 if (mode === "test"){ const PORT= secrets.PORT}{const PORT = process.env.PORT}

module.exports = {
  URL,
  PORT,
}
