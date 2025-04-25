import { LogInput } from "../../types";

const validateLogMessage = (log: LogInput): void => {
  if (!log) {
    throw new Error("Log message is required.");
  }
  if (typeof log !== "object") {
    throw new Error("Log message must be an object.");
  }
  if (!log.logType) {
    throw new Error("Log type is required.");
  }
  if (typeof log.logType !== "string") {
    throw new Error("Log type must be a string.");
  }
  if (!log.logMessage) {
    throw new Error("Log message is required.");
  }
  if (typeof log.logMessage !== "string") {
    throw new Error("Log message must be a string.");
  }
  if (!log.aiResponse) {
    throw new Error("aiResponse message is required.");
  }
  if (typeof log.aiResponse !== "string") {
    throw new Error("aiResponse message must be a string.");
  }
  if (!log.sessionId) {
    throw new Error("Session ID is required.");
  }
  if (typeof log.sessionId !== "string") {
    throw new Error("Session ID must be a string.");
  }
  if (log.sessionId.length < 5) {
    throw new Error("Session ID must be at least 5 characters long.");
  }
  if (log.sessionId.length > 50) {
    throw new Error("Session ID must be at most 50 characters long.");
  }
  if (log.logMessage.length < 2) {
    throw new Error("Log message must be at least 2 characters long.");
  }
  if (log.logMessage.length > 50000) {
    throw new Error("Log message must be at most 50000 characters long.");
  }
  if (log.logType.length < 2) {
    throw new Error("Log type must be at least 2 characters long.");
  }
  if (log.logType.length > 50) {
    throw new Error("Log type must be at most 50 characters long.");
  }
  if (log.sessionId.length < 5) {
    throw new Error("Session ID must be at least 5 characters long.");
  }
  if (log.sessionId.length > 50) {
    throw new Error("Session ID must be at most 50 characters long.");
  }
};

export default validateLogMessage;
