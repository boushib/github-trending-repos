export interface RepoOwner {
  username: string
  avatar: string
  url: string
}

export interface Repo {
  id: number
  name: string
  description: string
  url: string
  stars: number
  openIssues: number
  owner: RepoOwner
}
