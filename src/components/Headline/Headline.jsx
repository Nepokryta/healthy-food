import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/Headline.sass';

class Headline extends Component {
  render() {
    const {
      title, src, alt, greenLine 
    } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            <div className="headline">
              <h2 className={`headline__title ${theme}`}>{title}</h2>
              <div className="headline__subtitle">
                <img src={src} alt={alt} />
              </div>
            </div>
            <span className={`green__line${greenLine}`} />
          </>
        )}
      </ThemeContext.Consumer>   
    );
  }
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  greenLine: PropTypes.string.isRequired,
};

export default Headline;
