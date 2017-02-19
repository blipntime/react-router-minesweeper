var React = require('react');

// isClicked
// hasMine
// adjacentMineCnt
var MyCell = React.createClass({

  render: function() {
    let cell = this.props.cell;
    //const style = { color: 'red', 'fontWeight': 'bold'};
    let style = {
      padding: 1,
      width: 30,
      height: 30,
      textAlign: 'center',
      border: '1px solid'
    }
    if (cell.isClicked) {
      style.backgroundColor = cell.hasMine ? 'red' : 'lightgray';
    }

    let toShow = cell.isClicked ? cell.hasMine ? '¤' : (cell.adjacentMineCnt) : '';
    return <td key={this.props.idx} style={style}
      onClick={() => this.props.clicked(cell)}>{toShow}</td>;
  }
});

export default MyCell;