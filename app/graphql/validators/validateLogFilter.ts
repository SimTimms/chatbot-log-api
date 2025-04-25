import { LogFilter } from "../../types";

const validateLogFilter = (filter: LogFilter): void => {
  if (!filter) {
    throw new Error("Filter object is required.");
  }
};

export default validateLogFilter;
