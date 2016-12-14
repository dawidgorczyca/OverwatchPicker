import { connect } from 'react-redux'
import { setHero, setPlayer, addSpot, editSpotHero } from '../actions'
import PickersListComponent from '../components/PickersListComponent'

const teamSize = 6

const mapStateToProps = (state) => {
  return {
    team: state.team,
    teamSize: teamSize,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCharacter: (id, name) => {
      dispatch(setHero(id, name))
    },
    handlePlayer: (id, name) => {
      dispatch(setPlayer(id, name))
    },
    addSpot: (id) => {
      dispatch(addSpot(id))
    },
    editSpotHero: (id) => {
      dispatch(editSpotHero(id, name))
    }
  }
}

const TeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickersListComponent)

export default TeamContainer