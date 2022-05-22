export default function Repo({repo}){
    const issues = repo.open_issues_count
    const stars = repo.stargazers_count
  return(
    
      <div className="github-repo">
          <div className="avatar-container">
              <img src={repo.owner.avatar_url} alt="" className="avatar" />
          </div>
          <div className="repo-details">
              <h1 className="repo-name">{repo.name}</h1>
              <p className="repo-desc">{repo.description}</p>
              <div className="repo-stars-details">
                  <p className="stars">Stars: {stars > 1000?stars/1000 + "K":stars}</p>
                  <p className="issues">Issues: {issues > 1000?issues/1000 + "K":issues}</p>
                  <p className="submitted">Submitted 30 days by {repo.name}</p>
              </div>
          </div>
      </div>
  )
}