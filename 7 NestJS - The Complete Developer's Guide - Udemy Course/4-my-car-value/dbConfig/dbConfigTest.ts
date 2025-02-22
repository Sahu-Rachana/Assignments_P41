import { DataSource } from 'typeorm';

export const dbConfigTest = new DataSource({
  type: 'sqlite',
  database: 'test.sqlite',
  entities: ['**/*.entity.ts'],
  migrationsRun: true,
  synchronize: false,
  migrations: ['migrations/*.js'],
});

dbConfigTest
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
