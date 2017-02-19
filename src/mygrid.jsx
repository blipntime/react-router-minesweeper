var React = require('react');
import MyRow from './myrow.jsx';

class MyGrid extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = { borderCollapse: 'collapse' };
    console.log("MyGrid props ", this.props);
    let model = this.props.cells.rows;
    let isGameOver = this.props.cells.isGameOver;
    console.log("MyGrid model=", model);
    let ret = [];
    for (let idc=0; idc<8; idc++) {
      ret.push(<MyRow key={idc.toString()} id={idc} row={model[idc]} clicked={this.props.onClicked} />)
    }
    //
    return <div>
      <button disabled={!isGameOver} onClick={this.props.onRestart}>Restart</button>
      <button disabled={isGameOver} onClick={this.props.onValidate}>Validate</button>
      <table style={style}><tbody>{ret}</tbody></table><p>{isGameOver}</p>
    </div>;
  }
}

export default MyGrid;