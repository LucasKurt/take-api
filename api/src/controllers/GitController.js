const axios = require('axios')

class GitController {
  async getRepoAction(req, res) {
    const { data } = await axios.get(`https://api.github.com/users/takenet`)
    const max = data.public_repos%100 == 0 ? Math.trunc(data.public_repos / 100) : Math.trunc(data.public_repos / 100) + 1
    let filterData = []

    for (var i = 1; i <= max; i++) {
      const { data } = await axios.get(`https://api.github.com/users/takenet/repos?page=${i}&per_page=100`)
      filterData = [...filterData,...data]
    }

    filterData = filterData.filter(repo => repo.language == 'C#')

    filterData = filterData.sort((a,b) => {
      a = new Date(a.created_at).getTime()
      b = new Date(b.created_at).getTime()

      return a-b
    })

    res.json(filterData)


  }
}

module.exports = new GitController