import { useCallback, useEffect, useRef, useState } from "react"
import api from "../../api"
import { Repo } from "../../models"
import { mapAPIResponseToRepo } from "../../utils"
import RepoCard from "../RepoCard"
import "./RepoList.sass"

const ITEMS_PER_PAGE = 20

const RepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesTotal, setPagesTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const observer = useRef<IntersectionObserver>()
  const lastCardRef = useCallback(
    (node: any) => {
      if (!isLoading) {
        if (observer.current) {
          observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && currentPage <= pagesTotal) {
            setCurrentPage((p) => p + 1)
          }
        })

        if (node) observer.current.observe(node)
      }
    },
    [isLoading, pagesTotal, currentPage]
  )

  useEffect(() => {
    if (currentPage <= pagesTotal || pagesTotal === 0) {
      fetchRepos()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const fetchRepos = async () => {
    setIsLoading(true)

    try {
      const { data } = await api.get(
        `/repositories?q=created:>2000-01-01&sort=stars&order=desc&page=${currentPage}&per_page=${ITEMS_PER_PAGE}`
      )
      setRepos([...repos, ...mapAPIResponseToRepo(data.items)])
      setPagesTotal(Math.ceil(data.total_count / ITEMS_PER_PAGE))
    } catch (error) {
      // TODO - Handle error
    }

    setIsLoading(false)
  }
  return (
    <div className="repo-list">
      {repos.map((repo, idx) => (
        <RepoCard
          repo={repo}
          ref={idx + 1 === repos.length ? lastCardRef : undefined}
          key={repo.id}
        />
      ))}
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  )
}

export default RepoList
