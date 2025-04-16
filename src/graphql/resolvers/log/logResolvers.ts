import { LogType, LogFilter } from "../../../types";
import {
  createLogService,
  getLogService,
  getLogsService,
  filterLogService,
} from "./services";
import DateTimeScalar from "../../scalars/dateTimeScalar";

const DEFAULT_LIMIT = 50;

const logResolversQuery = {
  getLog: async (logNumber: string): Promise<LogType | null> => {
    return await getLogService(logNumber);
  },

  getLogs: async (): Promise<LogType[] | null> => {
    return await getLogsService(DEFAULT_LIMIT);
  },

  filterLogs: async (
    _: unknown,
    {
      filter,
    }: {
      filter: LogFilter;
    }
  ): Promise<LogType[] | null> => {
    return await filterLogService(filter, DEFAULT_LIMIT);
  },
};

const logResolversMutation = {
  createLog: async (
    _: unknown,
    {
      input,
    }: {
      input: LogFilter;
    }
  ): Promise<LogType> => {
    return await createLogService(input);
  },
};

export { DateTimeScalar, logResolversQuery, logResolversMutation };
