import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BpkButton from 'bpk-component-button';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';

import STYLES from '../App/App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
class ItineraryFooter extends Component {
  render() {
    return (
      <div>
        <BpkGridContainer>
          <BpkGridRow>
            <BpkGridColumn width={8}>
              <div className="text_display">
                <span className={getClassName('hightlight_txt')}>
                  {this.props.price}
                </span>
              </div>
              <div className="text_display">
                <span className={getClassName('blur_txt')}>
                  {this.props.agent}
                </span>
              </div>
            </BpkGridColumn>
            <BpkGridColumn width={1}>
              <BpkButton>Select</BpkButton>
            </BpkGridColumn>
          </BpkGridRow>
        </BpkGridContainer>
      </div>
    );
  }
}
ItineraryFooter.defaultProps = {
  price: '',
  agent: '',
};

ItineraryFooter.propTypes = {
  agent: PropTypes.string,
  price: PropTypes.string,
};
export default ItineraryFooter;
