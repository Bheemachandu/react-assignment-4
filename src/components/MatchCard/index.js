import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  console.log('bheem')
  console.log(recentMatches)
  return (
    <ul className="cardList">
      {recentMatches.map(each => (
        <Card cardDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

const Card = props => {
  const {cardDetails} = props
  const updatedCardList = {
    competingTeamLogo: cardDetails.competing_team_logo,
    competingTeam: cardDetails.competing_team,
    matchStatus: cardDetails.match_status,
    result: cardDetails.result,
  }
  console.log(updatedCardList)
  return (
    <li className="cardContainer">
      <img
        className="logoImage"
        alt={updatedCardList.competingTeam}
        src={updatedCardList.competingTeamLogo}
      />
      <h1>{updatedCardList.competingTeam}</h1>
      <p>{updatedCardList.result}</p>
      {updatedCardList.matchStatus === 'Lost' ? (
        <h1 className="lost">{updatedCardList.matchStatus}</h1>
      ) : (
        <h1 className="win">{updatedCardList.matchStatus}</h1>
      )}
    </li>
  )
}

export default MatchCard
