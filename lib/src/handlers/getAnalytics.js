import { getDbConnection } from "../utils/db";
import { HowToVideo } from "../entities/HowToVideo";
import { success, failure } from "../utils/response";
export const main = async () => {
    try {
        const db = await getDbConnection();
        const repo = db.getRepository(HowToVideo);
        const total = await repo.count();
        const countByStatus = await repo
            .createQueryBuilder("video")
            .select("video.status, COUNT(*) as count")
            .groupBy("video.status")
            .getRawMany();
        const passwordProtected = await repo.count({ where: { isPasswordProtected: true } });
        const top5Recent = await repo.find({ order: { createdAt: "DESC" }, take: 5 });
        return success({
            totalVideos: total,
            countByStatus,
            passwordProtectedCount: passwordProtected,
            top5Recent,
        });
    }
    catch (err) {
        return failure(err);
    }
};
//# sourceMappingURL=getAnalytics.js.map