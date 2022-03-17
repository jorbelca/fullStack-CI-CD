require("dotenv").config()

const URL = ${{secrets.MONGO_URI}}
const PORT = ${{secrets.env.PORT}}

module.exports = {
  URL,
  PORT,
}
