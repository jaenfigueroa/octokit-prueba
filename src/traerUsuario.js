const { Octokit } = require('octokit');
require('dotenv').config();

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
})

// TRAER DATOS DEL USUARIO AUTENTICADO
const getUserAuthenticated = async () => {
  const data = await octokit.rest.users.getAuthenticated();
  console.log(data);
}

//CREAR UN REPOSITORIO NUEVO
const createNewRepo = async (repoName) => {
  const data = await octokit.rest.repos.createForAuthenticatedUser({
    name: repoName,
    private: true,
    description: 'Este es un repositorio creado desde la API de GitHub',
    has_discussions: true,
    delete_branch_on_merge: true,
  })

  console.log(data)
}

//CREAR UN NUEVO FORK EN UN REPOSITORIO
const createNewFork = async () => {
  const data = await octokit.rest.repos.createFork({
    owner: 'yashraj24october',
    repo: 'My-portfolio-API',
  })

  console.log(data)
}

//CREAR UN ISSUE EN UN REPOSITORIO
const createNewIssue = async () => {
  const data = await octokit.rest.issues.create({
    owner: 'jaenfigueroa',
    repo: 'repo-prueba25',
    title: 'Este es un nuevo Issue',
    body: 'Este es el cuerpo de un issue',
    labels: ['bug'],
    assignees: ['jaenfigueroa'],
  })

  console.log(data)
}

//ELIMINAR UN REPOSITORIO
const deleteRepo = async () => {
  const data = await octokit.rest.repos.delete({
    owner: 'jaenfigueroa',
    repo: 'repo-prueba-541',
  })

  console.log(data)
}

deleteRepo()