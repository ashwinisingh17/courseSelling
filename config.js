
// cyclic dependency between files should not happen
require("dotenv").config();

const { JWT_USER_PASSWORD, JWT_ADMIN_PASSWORD } = process.env;


module.exports = {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}