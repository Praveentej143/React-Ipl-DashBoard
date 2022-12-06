// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-cont">
      <div className="left-side-text-container">
        <p className="comp-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="logo-container">
        <img
          src={competingTeamLogo}
          className="comp-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="right-side-text">
        <h1 className="latest-innings">First Innings</h1>
        <p className="values-latest">{firstInnings}</p>
        <h1 className="latest-innings">Second Innings</h1>
        <p className="values-latest">{secondInnings}</p>
        <h1 className="man-of-match-head">Man Of The Match</h1>
        <p className="values-latest">{manOfTheMatch}</p>
        <h1 className="umpires-head">Umpires</h1>
        <p className="values-latest">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
