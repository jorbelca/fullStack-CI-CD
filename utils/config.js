require("dotenv").config()

const URL = process.env.MONGO_URI || MONGOURI
const PORT = process.env.PORT || 3001 

module.exports = {
  URL,
  PORT,
}
