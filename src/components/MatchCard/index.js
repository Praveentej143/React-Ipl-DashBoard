// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails
  const textCls = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="recent-match-list-item">
      <div>
        <img
          src={competingTeamLogo}
          className="compt-logo"
          alt={`competing team ${competingTeam}`}
        />
      </div>
      <div>
        <p className="team-heading">{competingTeam}</p>
        <p className="result-val">{result}</p>
      </div>

      <div>
        <p className={textCls}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
