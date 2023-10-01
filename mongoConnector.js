const mongoose = require('mongoose');

const mongoConnector = async function (uri) {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false, 
        });
        return {
            isConnected: true,
            message: 'Successfully connected to MongoDB'
        };
    } catch (e) {
        return {
            isConnected: false,
            message: 'Database connection failed. Error:' + e
        };
    }
};
module.exports = mongoConnector;