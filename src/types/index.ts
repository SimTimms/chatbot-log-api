import { ObjectId } from "mongodb";

export type LogType = {
  _id?: ObjectId | null | undefined;
  logMessage?: string | null | undefined;
  aiResponse?: string | null | undefined;
  logType?: string | null | undefined;
  createdAt?: Date | null | undefined;
  updatedAt?: Date | null | undefined;
  sessionId?: string | null | undefined;
};

export type LogFilter = {
  _id: ObjectId;
  logMessage: string;
  aiResponse: string;
  logType: string;
  startDate: Date; // ISO 8601 format
  endDate: Date; // ISO 8601 format
  sessionId: string;
};

export type LogInput = {
  logMessage: string;
  aiResponse: string;
  logType: string;
  sessionId: string;
};
