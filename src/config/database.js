const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGO_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Error connecting to the database');
    console.error(err);
    process.exit();
});

module.exports = connection;
