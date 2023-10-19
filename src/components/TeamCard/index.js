import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="TeamCardContainer">
        <img className="teamlogo" alt={name} src={teamImageUrl} />
        <h1 className="teamName">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
