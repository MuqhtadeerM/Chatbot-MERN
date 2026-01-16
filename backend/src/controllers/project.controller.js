import Project from "../models/Project.model.js";

export const createProject = async (req, res) => {
  try {
    // get data from request
    const { name, systemPrompt } = req.body;

    // get userId from JWT middleware
    const userId = req.user.userId;

    // create Project Agent
    const project = await Project.create({
      name,
      systemPrompt,
      userId,
    });

    // response
    res.status(201).json({
      message: "project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Project creation failed",
      error: error.message,
    });
  }
};
