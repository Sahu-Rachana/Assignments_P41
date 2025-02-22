import { DataSource } from 'typeorm';

export const dbConfigProduction = new DataSource({
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

dbConfigProduction
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
