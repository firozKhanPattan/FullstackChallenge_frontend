import React from 'react';
import BpkCard from 'bpk-component-card';

import Leg from '../LegComponent/Leg';
import ItineraryFooter from '../FooterComponent/ItineraryFooter';
import STYLES from '../App/App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
class Itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsData: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('/flight-finder/flights')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error in Fetching the Iteneraries..');
      })
      .then(flightsData => this.setState({ flightsData, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {

    if (this.state.error) {
      return <p>{error.message}</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    if (this.state.flightsData && this.state.flightsData.itineraries) {
      return (
        <main className={getClassName('App__main')}>
          <ul>
            {this.state.flightsData &&
              this.state.flightsData.itineraries.map(itinerary => (
                <li key={itinerary.id}>
                  <BpkCard>
                    <Leg
                      {...this.state.flightsData.legs.find(
                        ({ id }) => id === itinerary.legs[0],
                      )}
                    />
                    <Leg
                      {...this.state.flightsData.legs.find(
                        ({ id }) => id === itinerary.legs[1],
                      )}
                    />
                    <ItineraryFooter {...itinerary} />
                  </BpkCard>
                </li>
              ))}
          </ul>
        </main>
      );
    }
    return <ul />;
  }
}
export default Itineraries;
