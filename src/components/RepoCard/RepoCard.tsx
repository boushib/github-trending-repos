import OpenIssueIcon from "../../icons/OpenIssue"
import StarIcon from "../../icons/Star"
import { Repo } from "../../models"
import { formatToK } from "../../utils"
import "./RepoCard.sass"

interface Props {
  repo: Repo
}

const RepoCard = ({ repo }: Props) => (
  <a href={repo.url} target="_blank" rel="noreferrer" className="repo-card">
    <img className="repo-card__owner__avatar" src={repo.owner.avatar} alt="" />
    <div className="repo-card__details">
      <div className="repo-card__name">{repo.name}</div>
      <div className="repo-card__description">{repo.description ?? "--"}</div>
      <div className="repo-card__meta">
        <div className="repo-card__stars">
          <StarIcon />
          {formatToK(repo.stars)} Stars
        </div>
        <div className="repo-card__stars">
          <OpenIssueIcon />
          {formatToK(repo.openIssues)} Issues
        </div>
        <div className="repo-card__owner__username">
          Owner: {repo.owner.username}
        </div>
      </div>
    </div>
  </a>
)

export default RepoCard
