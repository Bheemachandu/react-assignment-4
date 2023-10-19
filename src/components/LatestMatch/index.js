import './index.css'

const LatestMatch = props => {
  const latestMatchDetails = props
  console.log('bheem')
  console.log(latestMatchDetails.latestMatchDetails.competing_team)
  const updatedLatestMatchDetails = {
    competingTeam: latestMatchDetails.latestMatchDetails.competing_team,
    competingTeamLogo:
      latestMatchDetails.latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.latestMatchDetails.date,
    firstInnings: latestMatchDetails.latestMatchDetails.first_innings,
    id: latestMatchDetails.latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.latestMatchDetails.match_status,
    result: latestMatchDetails.latestMatchDetails.result,
    secondInnings: latestMatchDetails.latestMatchDetails.second_innings,
    umpires: latestMatchDetails.latestMatchDetails.umpires,
    venue: latestMatchDetails.latestMatchDetails.venue,
  }
  console.log(updatedLatestMatchDetails)
  return (
    <div className="LatestMatchContainer">
      <div>
        <h1>{updatedLatestMatchDetails.competingTeam}</h1>
        <h1>{updatedLatestMatchDetails.date}</h1>
        <p>{updatedLatestMatchDetails.venue}</p>
        <p>{updatedLatestMatchDetails.result}</p>
      </div>
      <div>
        <img
          alt={updatedLatestMatchDetails.competingTeam}
          src={updatedLatestMatchDetails.competingTeamLogo}
        />
      </div>
      <div className="container3">
        <h1>First Innings</h1>
        <p>{updatedLatestMatchDetails.firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{updatedLatestMatchDetails.secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{updatedLatestMatchDetails.manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{updatedLatestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
