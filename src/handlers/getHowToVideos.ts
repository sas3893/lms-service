import { getDbConnection } from "../utils/db";
import { HowToVideo } from "../entities/HowToVideo";
import { success, failure } from "../utils/response";

export const main = async () => {
  try {
    const db = await getDbConnection();
    const repo = db.getRepository(HowToVideo);
    const videos = await repo.find();
    return success(videos);
  } catch (err) {
    return failure(err);
  }
};
