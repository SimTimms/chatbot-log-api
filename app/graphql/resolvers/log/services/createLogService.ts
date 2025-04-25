import Log from "../../../models/logModel";
import errorHandler from "../../../../utils/errorHandler";
import { LogInput, LogType } from "../../../../types";
import { validateLogMessage } from "../../../validators";
/**
 * Creates a new log record in the database.
 *
 * @param input - An object of type `LogType` containing the details of the log to be created.
 * @returns A promise that resolves to the created log object of type `LogType`.
 * @throws Will throw an error if the log creation fails, with the error being processed by the `errorHandler`.
 */

async function createLogService(input: LogInput): Promise<LogType> {
  validateLogMessage(input);
  try {
    const newLog = new Log({
      logMessage: input.logMessage || "",
      aiResponse: input.aiResponse || "",
      sessionId: input.sessionId || "",
      logType: input.logType || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedLog = await newLog.save();

    return {
      _id: savedLog._id,
      logMessage: savedLog.logMessage,
      aiResponse: savedLog.aiResponse,
      sessionId: savedLog.sessionId,
      logType: savedLog.logType,
      createdAt: savedLog.createdAt,
      updatedAt: savedLog.updatedAt,
    } as LogType;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default createLogService;
