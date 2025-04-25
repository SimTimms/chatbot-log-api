import Log from "../../../models/logModel";
import errorHandler from "../../../../utils/errorHandler";
import buildConditionalQuery from "../../../../utils/buildConditionalQuery";
import throttledLimit from "../../../utils/throttledLimit";
import { LogFilter, LogType } from "../../../../types";
import validateLogFilter from "../../../validators/validateLogFilter";

const DEFAULT_LIMIT = 40;

async function filterLogsService(
  filter: LogFilter,
  limit?: number
): Promise<LogType[] | null> {
  try {
    validateLogFilter(filter);

    const excludeFields = ["startDate", "endDate"];
    const conditionalQuery: { [key: string]: any } = buildConditionalQuery(
      filter,
      excludeFields
    );

    const filteredQueryByDateTime = {
      ...conditionalQuery,
    };

    const logs = await Log.find(filteredQueryByDateTime).limit(
      throttledLimit(limit, DEFAULT_LIMIT)
    );

    return logs;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default filterLogsService;
