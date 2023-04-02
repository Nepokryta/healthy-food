import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import RatingStars from './RatingStars/RatingStars';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import screenImage from '../../assets/img/screenImage.png';

class OneDishCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false
    };
  }

  handleImageLoad = () => {
    this.setState({
      imageError: false,
    });
    console.log('Image uploaded!');
  };

  handleImageError = () => {
    this.setState({
      imageError: true,
    });
  };

  render() {
    const {
      id, src, alt, title, subtitle, newSubtitle, description, onCardClick, onAddCardClick, onAddElement,
      onDeleteElement, onAddElementOnClick, showElement, 
    } = this.props;

    const { imageError } = this.state;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            <button className="arrow-card" type="submit" onClick={() => onCardClick(id)}>
              <Close />
            </button>
            {imageError ? <img src={screenImage} alt="error" /> : <img src={src} alt={alt} onLoad={this.handleImageLoad} onError={this.handleImageError} />}
            <div className={`dish__card-details ${theme}`}>
              <h2 className={`dish__card-title ${theme}`}>{title}</h2>
              <h3 className={`dish__card-subtitle ${theme}`}>{subtitle}</h3>
              { showElement ? '' : <h3 className={`dish__card-newsubtitle ${theme}`}>{newSubtitle}</h3> }
              <h4 className="dish__card-description">{description}</h4>
              <button className={`activityBTN button ${theme}`} type="submit" onClick={() => onAddElement(id)}>MY FAVORITE</button>
              <div className="botton_block">
                <button className={`activityBTN button ${theme}`} type="submit" onClick={() => onDeleteElement(id)}>DELETE</button>
                <button className={`activityBTN button ${theme}`} type="submit" onClick={() => onAddElementOnClick(id)}>ADD</button>
              </div>
            </div>
            <div className="dish__card-action">
              <RatingStars />
              <button 
                className={`activityBTN button ${theme}`} 
                type="submit"
                onClick={() => onAddCardClick(src, alt, title, subtitle, description, newSubtitle)}
              >
                ADD CARD
              </button>
            </div>
          </>
        )}
      </ThemeContext.Consumer>    
    );
  }
}

OneDishCardView.propTypes = {
  id: PropTypes.string.isRequired, 
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  newSubtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired, 
  onAddCardClick: PropTypes.func.isRequired,
  onAddElement: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElementOnClick: PropTypes.func.isRequired,
  showElement: PropTypes.bool.isRequired,
};

export default OneDishCardView;
