import React, { useState, useRef } from 'react';
import ResultModal from './ResultModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faDog as faSmallDog, faDog as faMediumDog, faDog as faLargeDog, faDog as faGiantDog } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAge } from '../features/ageSlice';


const Calculator = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [resultText, setResultText] = useState('');
  const [dogFact, setDogFact] = useState('');
  const [ageValue, setAgeValue] = useState(0);
  const [sizeValue, setSizeValue] = useState("small");
  const [petType, setPetType] = useState("dog");
  const dispatch = useDispatch();
   const inputRef = useRef(null);
  const HumanAge = useSelector(state => state.petAge.humanEquivalent)
  const ModelText = useSelector(state => state.petAge.modelText)

  // Example facts
  const facts = [
    "Dogs have about 1,700 taste buds. Humans have about 9,000!",
    "A dog's sense of smell is 40 times better than a human's.",
    "Dogs can learn more than 1000 words and gestures.",
    "The Basenji is the only barkless dog.",
    "A Greyhound could beat a Cheetah in a long-distance race."
  ];

  const handleAgeChange = (e) => {
    setAgeValue(e.target.value);
  };

  const handleSizeClick = (size) => {
    setSizeValue(size);
  };

  const handlePetTypeClick = (type) => {
    setPetType(type);
  };

  // Dummy calculation for demo
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateAge({ ageValue, sizeValue, petType }));
    setDogFact(facts[Math.floor(Math.random() * facts.length)]);
    setModalOpen(true);
  };

  return (
    <>
      <div className="main-card__image">
        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600&h=600&fit=crop" alt="Dog" className="dog-img" />
      </div>
      <div className="main-card__controls">
        <h1 className="main-title">How Old Is Your Pet <em>Really</em>?</h1>
        <form id="dogForm" autoComplete="off" onSubmit={handleSubmit}>
          {/* Pet Type Selector */}
          <div className="form-group">
            <label className="group-label">Select Cat or Dog:</label>
            <div className="pet-type-selector" role="radiogroup" aria-label="Select Cat or Dog">
              <button 
                type="button" 
                className={`pet-type-btn ${petType === 'cat' ? 'active' : ''}`} 
                aria-label="Cat" 
                data-type="cat" 
                tabIndex="0"
                onClick={() => handlePetTypeClick('cat')}
              >
                <FontAwesomeIcon icon={faCat} size="2x" />
                <span>Cat</span>
              </button>
              <button 
                type="button" 
                className={`pet-type-btn ${petType === 'dog' ? 'active' : ''}`} 
                aria-label="Dog" 
                data-type="dog" 
                tabIndex="0"
                onClick={() => handlePetTypeClick('dog')}
              >
                <FontAwesomeIcon icon={faDog} size="2x" />
                <span>Dog</span>
              </button>
            </div>
          </div>
          {/* Age Selector */}
          <div className="form-group">
            <label className="group-label">Select Age of Pet:</label>
            <div className="age-slider-row">
              <input 
                type="range" 
                id="dogAgeRange" 
                min="0" 
                max="20" 
                ref={inputRef}
                value={ageValue}
                onChange={handleAgeChange}
                aria-label="Pet's age slider"
              />
              <div className="age-value-circle">
                <span id="dogAgeValue">{ageValue}</span>
              </div>
              {/* <div className="age-unit-toggle">
                <button type="button" className="unit-btn" data-unit="months">Months</button>
                <button type="button" className="unit-btn" data-unit="years">Years</button>
              </div> */}
            </div>
          </div>
          {/* Size Selector - Only show for dogs */}
          {petType === 'dog' && (
            <div className="form-group">
              <label className="group-label">What is your dog's size?</label>
              <div className="size-selector" role="radiogroup" aria-label="Select dog size">
                <button 
                  type="button" 
                  className={`size-btn ${sizeValue === 'small' ? 'active' : ''}`} 
                  data-size="small" 
                  aria-label="Small"
                  onClick={() => handleSizeClick('small')}
                >
                  <FontAwesomeIcon icon={faSmallDog} size="lg" />
                  <span>Small</span>
                </button>
                <button 
                  type="button" 
                  className={`size-btn ${sizeValue === 'medium' ? 'active' : ''}`} 
                  data-size="medium" 
                  aria-label="Medium"
                  onClick={() => handleSizeClick('medium')}
                >
                  <FontAwesomeIcon icon={faMediumDog} size="2x" />
                  <span>Medium</span>
                </button>
                <button 
                  type="button" 
                  className={`size-btn ${sizeValue === 'large' ? 'active' : ''}`} 
                  data-size="large" 
                  aria-label="Large"
                  onClick={() => handleSizeClick('large')}
                >
                  <FontAwesomeIcon icon={faLargeDog} size="3x" />
                  <span>Large</span>
                </button>
                <button 
                  type="button" 
                  className={`size-btn ${sizeValue === 'giant' ? 'active' : ''}`} 
                  data-size="giant" 
                  aria-label="Giant"
                  onClick={() => handleSizeClick('giant')}
                >
                  <FontAwesomeIcon icon={faGiantDog} size="4x" />
                  <span>Giant</span>
                </button>
              </div>
            </div>
          )}
          <button type="submit" className="calculate-btn">CALCULATE</button>
        </form>
      </div>
      <ResultModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="results visible">
          <div className="human-age">{HumanAge}</div>
          <p>{ModelText}</p>
          <div className="share-buttons">
            <button className="share-button" onClick={() => window.open('https://twitter.com/intent/tweet')}>Twitter</button>
            <button className="share-button" onClick={() => window.open('https://www.facebook.com/sharer/sharer.php')}>Facebook</button>
          </div>
          <div className="dog-fact">{dogFact}</div>
        </div>
      </ResultModal>
    </>
  );
};

export default Calculator;