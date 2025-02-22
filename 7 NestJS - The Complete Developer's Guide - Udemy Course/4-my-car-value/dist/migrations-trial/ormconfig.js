"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfigDev_1 = require("../dbConfig/dbConfigDev");
const dbConfigTest_1 = require("../dbConfig/dbConfigTest");
const dbConfigProduction_1 = require("../dbConfig/dbConfigProduction");
switch (process.env.NODE_ENV) {
    case 'development':
        dbConfigDev_1.dbConfigDev
            .initialize()
            .then(() => {
            console.log('Data Source has been initialized!');
        })
            .catch((err) => {
            console.error('Error during Data Source initialization', err);
        });
        break;
    case 'test':
        dbConfigTest_1.dbConfigTest
            .initialize()
            .then(() => {
            console.log('Data Source has been initialized!');
        })
            .catch((err) => {
            console.error('Error during Data Source initialization', err);
        });
        break;
    case 'production':
        dbConfigProduction_1.dbConfigProduction
            .initialize()
            .then(() => {
            console.log('Data Source has been initialized!');
        })
            .catch((err) => {
            console.error('Error during Data Source initialization', err);
        });
        break;
    default:
        throw new Error('unknown environment');
}
//# sourceMappingURL=ormconfig.js.map