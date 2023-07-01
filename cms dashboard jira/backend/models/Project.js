import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
    },
    desc: {
      type: String,
    },
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    progress: {
      type: String,
      enum: ["active", "completed"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);
