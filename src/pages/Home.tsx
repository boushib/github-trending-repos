import { useEffect, useState } from "react"
import api from "../api"
import RepoList from "../components/RepoList"
import { Repo } from "../models"
import { mapAPIResponseToRepo } from "../utils"

const Home = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    fetchRepos()
  }, [])

  const fetchRepos = async () => {
    const { data } = await api.get(
      `/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=1`
    )
    setRepos(mapAPIResponseToRepo(data.items))
    setTotalCount(data.total_count)
  }

  return (
    <div className="home page">
      <div className="container">
        <h1 style={{ marginBottom: 24 }}>Trending Repos</h1>
        <RepoList repos={repos} />
      </div>
    </div>
  )
}

export default Home
