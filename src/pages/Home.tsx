import { useEffect, useState } from "react"
import api from "../api"
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

  console.log(repos, totalCount)

  return (
    <div className="home page">
      <div className="container">
        <h1>Trending Repos</h1>
      </div>
    </div>
  )
}

export default Home
