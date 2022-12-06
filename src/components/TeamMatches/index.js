import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    // console.log(newData)
    const {latestMatchDetails} = newData
    const newLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    // console.log(newLatestMatchDetails)
    const {recentMatches} = newData
    const newRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    newData.recentMatches = newRecentMatches
    newData.latestMatchDetails = newLatestMatchDetails
    // console.log(newRecentMatches)
    this.setState({matchDetails: newData, isLoading: false})
  }

  render() {
    const {matchDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`main-match-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`match-details-container ${id} `}>
            <img src={teamBannerUrl} className="banner-img" alt="team banner" />
            <div className="latest-match-container">
              <h1 className="heading">Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="match-card-list-container">
              {recentMatches.map(each => (
                <MatchCard recentMatchDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
