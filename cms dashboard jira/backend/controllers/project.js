import Project from "../models/Project.js";

// add new project
export const addNewProject = async (req, res) => {
  const { projectName, desc } = req.body;
  const project = await Project.create({
    projectName,
    desc,
  });
  res.status(200).json({ project });
  try {
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// fetch all products

export const fetchAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 });
    res.json({ projects });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
