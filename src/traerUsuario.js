const { Octokit } = require('@octokit/rest');
require('dotenv').config();

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
})

const getUser = async () => {
  const data = await octokit.request('/user');
  console.log(data)
}

getUser();