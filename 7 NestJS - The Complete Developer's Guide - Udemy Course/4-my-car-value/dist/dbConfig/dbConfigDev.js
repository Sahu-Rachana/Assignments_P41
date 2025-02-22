"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigDev = void 0;
const typeorm_1 = require("typeorm");
exports.dbConfigDev = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['**/*.entity.js'],
    synchronize: false,
    migrations: ['migrations/*.js'],
});
exports.dbConfigDev
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
//# sourceMappingURL=dbConfigDev.js.map