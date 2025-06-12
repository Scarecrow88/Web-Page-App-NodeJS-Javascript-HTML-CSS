const dotenv = require ('dotenv');
dotenv.config ({
    path: './.env'
});
module.exports = {
    app: {
        port: process.env.PORT
    }
}