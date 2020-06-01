import React, { Component } from 'react';
import ColumnChart from './ColumnChart';
import "../../../styles/app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      deals: []
    }
  }

  componentDidMount() {
    const { response } = this.props;
    if (response.error) {
      this.setState({ error: response.error })
      return
    }

    this.setState({ deals: response.entries });
  }

  processDealTotalValues = () => {
    return this.state.deals.reduce((result, deal) => {
      const stage = deal["deal_stage"].percent;
      result[stage] = (result[stage] || 0) + Number(deal.value);
      return result;
    }, {});
  }

  dataPoints = () => {
    const dealValues = this.processDealTotalValues();
    return Object.keys(dealValues).map((key) => {
      return { label: key, y: dealValues[key] }
    })
  }

  render() {
    return (
      <div className="app">
        {
          this.state.error.length ?
            <h3 className="error-message">{this.state.error}</h3> :
            <ColumnChart
              title="Deals in the Pipeline"
              dataPoints={this.dataPoints()}
            />
        }
      </div>
    );
  }
}
