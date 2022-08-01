import RepoList from "../components/RepoList"

const Home = () => (
  <div className="home page">
    <div className="container">
      <h1 style={{ marginBottom: 24 }}>Trending Repos</h1>
      <RepoList />
    </div>
  </div>
)

export default Home
