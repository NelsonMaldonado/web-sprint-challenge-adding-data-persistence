// build your `Project` model here
const db = require("../../data/dbConfig")

const convertObject = (project) => {
  return {
    ...project,
    project_completed: !!project.project_completed,
  }
}
