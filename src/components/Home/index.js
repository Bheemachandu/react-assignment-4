import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {matchlist: [], isLoading: true}

  componentDidMount() {
    this.fetchDetails()
  }

  fetchDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({matchlist: updatedList, isLoading: false})
    console.log(updatedList)
  }

  render() {
    const {matchlist, isLoading} = this.state
    console.log(isLoading)
    console.log(matchlist)
    return (
      <div className="HomeContainer">
        <div className="headingContainer">
          <img
            className="logoImg"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="mainHeading">IPL Dashboard</h1>
        </div>
        <div className="teamsContainer">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <ul className="listCotainer">
              {matchlist.map(each => (
                <TeamCard key={each.id} teamDetails={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
