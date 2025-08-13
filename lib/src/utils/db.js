import "reflect-metadata";
import { AppDataSource } from "../typeorm.config";
let isInitialized = false;
export const getDbConnection = async () => {
    if (!isInitialized) {
        await AppDataSource.initialize();
        isInitialized = true;
    }
    return AppDataSource;
};
//# sourceMappingURL=db.js.map