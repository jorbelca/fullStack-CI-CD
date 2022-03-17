require("dotenv").config()

const URL = {mode === "test" ? secrets.MONGO_URI : process.env.MONGO_URI}
const PORT = {mode === "test" ? secrets.PORT :process.env.PORT}

module.exports = {
  URL,
  PORT,
}
