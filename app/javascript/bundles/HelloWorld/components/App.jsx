import React, { Component } from 'react';
import ColumnChart from './ColumnChart';
import "../../../styles/app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <ColumnChart
          title="Deals in the Pipeline"
        />
      </div>
    );
  }
}
