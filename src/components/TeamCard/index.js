// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="links">
      <li className="team-card-container">
        <img src={teamImageUrl} className="team-img-url" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
