import mongoose, { Schema } from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    project: {
      type: Schema.Types.ObjectId, // whenever making db relations / pointing use this, ref -> model nam
      ref: "Project",
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Note = mongoose.model("Note", noteSchema);
