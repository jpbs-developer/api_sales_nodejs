import { DataSource } from 'typeorm';
import path from 'path';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'api_db',
  synchronize: true,
  entities: [
    path.join(__dirname, '../../modules/**/typeorm/entities/*{.ts,.js}'),
  ],
  migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
});

export default AppDataSource;
