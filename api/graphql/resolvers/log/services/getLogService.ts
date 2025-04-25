import Log from "../../../models/logModel";
import errorHandler from "../../../../utils/errorHandler";
import { LogType } from "../../../../types";

async function getLogService(logNumber: string): Promise<LogType | null> {
  try {
    const log = await Log.findOne({ logNumber });

    return log;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getLogService;
