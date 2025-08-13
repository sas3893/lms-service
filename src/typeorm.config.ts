// import { DataSource } from "typeorm";
// import { HowToVideo } from "./entities/HowToVideo";
// import { User } from "./entities/User";
// import * as dotenv from "dotenv";
// import mysql from "mysql2/promise";

// dotenv.config();

// async function ensureDatabaseExists() {
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//   });

//   await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
//   await connection.end();
// }

// // Call this before exporting DataSource
// await ensureDatabaseExists();

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   synchronize: false,
//   logging: false,
//   entities: [HowToVideo, User],
//   migrations: ["src/migrations/*.ts"],
// });
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Mylife@531100",
  database: "lms",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  synchronize: false,
});
