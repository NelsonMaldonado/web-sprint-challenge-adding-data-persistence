// build your `Project` model here
const db = require("../../data/dbConfig")

const convertObject = (project) => {
  return {
    ...project,
    project_completed: !!project.project_completed,
  }
}

const getAll =()=>{
    db('projects').then(projects=>{
        projects.map(convertObject)
    })
}

const insert = async (project)=>{
let project_id;
await db("projects").insert(project).then(([id])=>project_id)
return db('projects').where({project_id}).first().then(convertObject)
}

module.exports = {
    getAll,
    insert
}