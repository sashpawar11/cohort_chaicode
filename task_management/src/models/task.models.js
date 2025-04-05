import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, TaskStatusEnum } from "../constants/constants";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
      trim: true,
    },
    description: {
      type: "String",
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: [true, "Project ref is required!"], // custom messages can be passed on fields
    },
    assginedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assginedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: "String",
      enum: AvailableTaskStatuses,
      default: TaskStatusEnum.TODO,
    },
    attachments: {
      type: [
        {
          // Depends on file service ( external)
          mimeType: String,
          url: String,
          size: Number,
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

export const Task = mongoose.model("Task", taskSchema);
