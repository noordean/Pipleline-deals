import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../bundles/HelloWorld/components/App";
import ColumnChart from "../bundles/HelloWorld/components/ColumnChart";

configure({ adapter: new Adapter() });

describe('Component: App', () => {
  describe('when props response contains deal data', () => {
    const dealProps = {
      response: {
        entries: [
          { value: "92853.1", deal_stage: { id: 727378, percent: 10, name: "Name A" } },
          { value: "92853.1", deal_stage: { id: 727379, percent: 10, name: "Name B" } }
        ]
      }
    };

    it('renders ColumnChart with processed deals data', () => {
      const wrapper = shallow(
        <App {...dealProps} />
      );

      expect(wrapper.find(ColumnChart).prop('dataPoints').length).toBe(1);
      expect(wrapper.find(ColumnChart).prop('dataPoints')[0].y).toBe(185706.2);
      expect(wrapper.find(ColumnChart).prop('dataPoints')[0].label).toBe("10");
    });
  })

  describe('when props response contains an error', () => {
    const dealProps = {
      response: {
        error: "Unknown api key"
      }
    };

    it('renders the error message', () => {
      const wrapper = shallow(
        <App {...dealProps} />
      );

      expect(wrapper.find(".error-message").text()).toBe("Unknown api key");
    });
  })
});
