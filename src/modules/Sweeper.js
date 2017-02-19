import React from 'react';
import { Link } from 'react-router'
import VisibleGrid from '../containers/VisibleGrid';

export default class Sweeper extends React.Component {
  render() {
    return (
      <div>start main
        <Link to="/about">About</Link>
        Minesweeper
        <VisibleGrid/>end main
      </div>
    )
  }
}
