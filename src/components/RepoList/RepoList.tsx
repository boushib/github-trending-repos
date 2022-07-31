import { Repo } from "../../models"
import RepoCard from "../RepoCard"
import "./RepoList.sass"

interface Props {
  repos: Repo[]
}

const RepoList = ({ repos }: Props) => (
  <div className="repo-list">
    {repos.map((repo) => (
      <RepoCard repo={repo} key={repo.id} />
    ))}
  </div>
)

export default RepoList
