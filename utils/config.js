require("dotenv").config()

const URL = secrets.MONGO_URI
const PORT = secrets.PORT

module.exports = {
  URL,
  PORT,
}
