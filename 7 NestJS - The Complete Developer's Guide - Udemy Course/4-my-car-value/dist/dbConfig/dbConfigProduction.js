"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigProduction = void 0;
const typeorm_1 = require("typeorm");
exports.dbConfigProduction = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    migrationsRun: true,
    entities: ['**/*.entity.js'],
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
    migrations: ['migrations/*.js'],
});
exports.dbConfigProduction
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
//# sourceMappingURL=dbConfigProduction.js.map