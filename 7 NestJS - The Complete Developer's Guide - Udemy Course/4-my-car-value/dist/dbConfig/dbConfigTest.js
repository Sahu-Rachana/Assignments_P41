"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigTest = void 0;
const typeorm_1 = require("typeorm");
exports.dbConfigTest = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'test.sqlite',
    entities: ['**/*.entity.ts'],
    migrationsRun: true,
    synchronize: false,
    migrations: ['migrations/*.js'],
});
exports.dbConfigTest
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
//# sourceMappingURL=dbConfigTest.js.map