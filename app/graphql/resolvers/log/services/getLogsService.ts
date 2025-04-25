import Log from "../../../models/logModel";
import errorHandler from "../../../../utils/errorHandler";
import { LogType } from "../../../../types";
import throttledLimit from "../../../utils/throttledLimit";

async function getLogsService(limit?: number): Promise<LogType[] | null> {
  try {
    const logs = await Log.find().limit(throttledLimit(limit, 40));

    return logs;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getLogsService;
