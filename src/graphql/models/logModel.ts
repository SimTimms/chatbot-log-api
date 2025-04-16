import mongoose, { Schema } from "mongoose";

const logSchema = new Schema({
  logMessage: {
    type: String,
  },
  aiResponse: {
    type: String,
  },
  sessionId: {
    type: String,
  },
  logType: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Log = mongoose.model("Log", logSchema);
export default Log;
