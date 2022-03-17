require("dotenv").config()

const URL = process.env.MONGO_URI 
const PORT = 3001

module.exports = {
  URL,
  PORT,
}
