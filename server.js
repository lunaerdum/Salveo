const mongoConnector = require('./mongoConnector');
const config = require('./config');
const createHttpServer = require('./createHttpServer');

const start = async function () {
    console.log('Starting new server...');
    let dbStatus = await mongoConnector(config.mongoUri);
    console.log(dbStatus.message);

    if (dbStatus.isConnected) {
        createHttpServer(config.httpPort);
    }
    else {
        console.log('Exiting now!');
        process.exit(1);
    }
};
start();
