import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesList: [], isLoadingData: true}

  componentDidMount() {
    this.fetchGameDetails()
  }

  fetchGameDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const id1 = id.slice(1)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id1}`)
    const data = await response.json()
    const updatedList = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchesList: updatedList, isLoadingData: false})
  }

  renderBlogItemDetails = () => {}

  render() {
    const {teamMatchesList, isLoadingData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesList
    return (
      <div className="TeamMatchesContainer">
        {isLoadingData ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              className="bannerImage"
              alt="team banner"
              src={teamBannerUrl}
            />
            <h1>Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <MatchCard recentMatches={recentMatches} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
