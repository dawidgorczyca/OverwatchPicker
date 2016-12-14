import { connect } from 'react-redux'
import { setHero, setPlayer } from '../actions'
import PickersListComponent from '../components/PickersListComponent'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = (state) => {
  return {
    team: state.team
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCharacter: (id, name) => {
      dispatch(setHero(id, name))
    },
    handlePlayer: (id, name) => {
      dispatch(setPlayer(id, name))
    }
  }
}

const TeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickersListComponent)

export default TeamContainer