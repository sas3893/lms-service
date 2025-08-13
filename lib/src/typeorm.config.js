import { DataSource } from "typeorm";
import { HowToVideo } from "./entities/HowToVideo";
import { User } from "./entities/User";
import * as dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [HowToVideo, User],
    migrations: ["src/migrations/*.ts"],
});
//# sourceMappingURL=typeorm.config.js.map