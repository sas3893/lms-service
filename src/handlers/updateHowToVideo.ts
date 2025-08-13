import { getDbConnection } from "../utils/db";
import { HowToVideo } from "../entities/HowToVideo";
import { success, failure } from "../utils/response";

export const main = async (event) => {
  try {
    const id = Number(event.pathParameters.id);
    const data = JSON.parse(event.body);
    const db = await getDbConnection();
    const repo = db.getRepository(HowToVideo);
    await repo.update(id, data);
    return success({ message: "Updated successfully" });
  } catch (err) {
    return failure(err);
  }
};
