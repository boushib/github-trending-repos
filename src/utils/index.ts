import { Repo } from "../models"

export const mapAPIResponseToRepo = (data: any): Repo[] => {
  return data.map((res: any) => ({
    id: res.id,
    name: res.name,
    description: res.description,
    openIssues: res.open_issues_count,
    url: res.html_url,
    stars: res.stargazers_count,
    owner: {
      username: res.owner.login,
      avatar: res.owner.avatar_url,
      url: res.owner.html_url,
    },
  }))
}
