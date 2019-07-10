import React from 'react';
import { useState } from 'react';
import 'web-animations-js'


const Container = {
  width: '100%',
  marginBottom: 100,
  overflowX: 'hidden',
};
const fullWidth = {
  width: '100%',
};
const hr = {
  backgroundColor: '#948BB7',
  height: 3,
  margin: 0,
  textAlign: 'left',
  width: '1.6rem',
};
const box = {
  display: 'block',
  paddingBottom: 12,
};
const titleSection = {
  padding: '0 13vw',
};
const titleContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
const title = {
  fontSize: 22,
};
const buttons = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 20,
};
const button = {
  display: 'inline-block',
  border: 'none',
  padding: '1rem 1rem',
  margin: 0,
  textDecoration: 'none',
  background: 'transparent',
  color: '#ffffff',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background 250ms ease-in-out',
  transform: '150ms ease',
};
const buttonStyle = {
  width: 30,
};

function Carousel(props) {

  const [slidePosition, setPosition] = useState(0);
  const sliderRef = React.createRef();
  const options = {
    duration: 500,
    iterations: 1,
    fill: 'forwards',
  };


  function slideRight() {
    if(slidePosition === -70) {
      sliderRef.current.animate([{transform: `translateX(${slidePosition}rem)`}, {transform: `translateX(0rem)`}], options);
      setPosition(0);
      return;
    }
    sliderRef.current.animate([{transform: `translateX(${slidePosition}rem)`}, {transform: `translateX(${slidePosition - 35}rem)`}], options)
    setPosition(slidePosition - 35);
  }

  function slideLeft() {
    sliderRef.current.animate([{transform: `translateX(${slidePosition}rem)`}, {transform: `translateX(${slidePosition + 35}rem)`}], options)
    setPosition(slidePosition + 35);
  }

  const leftDisabled = slidePosition === 0;

  return (
    <div style={Container}>
      <div style={titleSection}>
        <div style={titleContainer}>
          <h3 style={title}>{props.title}</h3>
          <div style={buttons}>
            <button onClick={slideLeft} disabled={leftDisabled} style={button}><img src={require('../../src/static/back.svg')}/></button>
            <button onClick={slideRight} style={button}><img src={require('../../src/static/next.svg')} /></button>
          </div>
        </div>
        <div style={box}>
          <hr align="left" style={hr}/>
        </div>
      </div>
      <div style={fullWidth}>
        <div style={{
          width: '200%',
        }} ref={sliderRef}>
          {props.children}
        </div>
      </div>
    </div>
    )
}

export default Carousel;