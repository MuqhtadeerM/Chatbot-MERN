import mongoose from "mongoose";

// Agent Schema 
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    systemPrompt: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
