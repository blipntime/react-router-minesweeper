var React = require('react');
import MyCell from './mycell.jsx';

var MyRow = React.createClass({

  render: function() {
    return <tr key={this.props.id}>
      {this.props.row.map( (c, idx) => <MyCell key={idx} idx={idx} cell={c} clicked={this.props.clicked}/> )}
      </tr>;
  }
});

export default MyRow;