export interface RepoOwner {
  username: string
  avatar: string
}

export interface Repo {
  id: number
  name: string
  description: string
  url: string
  stars: number
  issues: number
  owner: RepoOwner
}
