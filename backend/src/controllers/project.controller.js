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

// get the user data by id
export const getUserProjects = async (req, res) => {
  try {
    // get logged in userId from token
    const userId = req.user.userId;

    // find the project below
    const projects = await Project.find({ userId });

    // send response
    res.status(200).json({
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to fetch",
      error: error.message,
    });
  }
};

// get the project by id
export const getProjectById = async (req, res) => {
  try {
    // get project id using url
    const projectId = req.params.id;

    // get userID from token
    const userId = req.user.userId;

    // find project by id
    const project = await Project.findOne({
      _id: projectId,
      userId: userId,
    });

    //  if not found project
    if (!project) {
      return res.status(404).json({
        message: "not Found project",
      });
    }

    // sending response
    res.status(200).json({
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to fetch project",
      error: error.message,
    });
  }
};
