import { DataSource } from 'typeorm';

export const dbConfigDev = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: ['**/*.entity.js'],
  synchronize: false,
  migrations: ['migrations/*.js'],
});

dbConfigDev
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
