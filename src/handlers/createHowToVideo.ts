import { getDbConnection } from "../utils/db";
import { HowToVideo } from "../entities/HowToVideo";
import { success, failure } from "../utils/response";

export const main = async (event: any) => {
  try {
    const data = JSON.parse(event.body);
    const db = await getDbConnection();
    const repo = db.getRepository(HowToVideo);
    const video = repo.create(data);
    await repo.save(video);
    return success(video);
  } catch (err) {
    return failure(err);
  }
};
