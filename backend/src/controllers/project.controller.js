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

// update the project using id
export const updateProject = async (req, res) => {
  try {
    //  get project id from params
    const projectId = req.params.id;

    //  get loged in user id
    const userId = req.user.userId;

    //   get updated fields from body
    const { name, systemPrompt } = req.body;

    // find the project and ensure the ownership
    const project = await Project.findOneAndUpdate(
      {
        _id: projectId,
        userId,
      },
      { name, systemPrompt },
      { new: true } // return updated docs
    );

    // if project found or not
    if (!project) {
      return res.status(404).json({
        message: "Not found project or not authorized",
        error: error.message,
      });
    }

    // send response
    res.status(200).json({
      message: "project updated succssfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to update project",
      error: error.message,
    });
  }
};

// delete project
export const deleteProject = async (req, res) => {
  try {
    // get project id from params
    const projectId = req.params.id;

    // get loggedin user idd from token
    const userId = req.user.userId;

    // find the peojct and ensure the ownership then delete
    const project = await Project.findOneAndDelete({
      _id: projectId,
      userId,
    });

    //if project not found or not owned
    if (!project) {
      return res.status(404).json({
        message: "project not found or not authorixed",
      });
    }

    // sucss response
    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to delete",
      error: error.message,
    });
  }
};
