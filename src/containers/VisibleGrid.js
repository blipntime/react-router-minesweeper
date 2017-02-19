import { connect } from 'react-redux';
import { clickCell, restart, validate } from '../actions'
import MyGrid from '../mygrid'

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClicked(cell) {
      console.log("onClicked", cell, ownProps)
      dispatch(clickCell(cell))
    },

    onRestart() {
      dispatch(restart())
    },

    // the user is successful if she already clicked on 64-10=54 cells
    onValidate() {
      dispatch(validate())
    }
  }
}

const VisibleGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGrid)

export default VisibleGrid