import React from 'react';

const layoutStyle = {
  display: 'flex',
  paddingTop: '6.4rem',
  position: 'relative',
};

const contentWrapper = {
  alignItems: 'center',
  display: 'flex',
};

const sectionImage = {
  maxWidth: 700,
  width: '100%'
};
const container = {
  padding: '0 13vw',
  position: 'relative',
  width: '100%',
};
const whiteBackground = {
  right: '30rem',
  backgroundColor: '#fff',
  height: '100%',
  position: 'absolute',
  top: 0,
  width: '100vw',
};
const imageContainer = {
  alignSelf: 'flex-start',
  flex: 5,
  transform: 'translateY(-6.4rem)',
};
const singleContent = {
  flex: 4,
  position: 'relative',
  paddingRight: '3.2rem',
};
const box = {
  display: 'block',
  paddingBottom: 12,
};
const hr = {
  backgroundColor: '#1E90FF',
  height: 3,
  margin: 0,
  textAlign: 'left',
  width: '1.6rem',
};
const sectionText = {
  maxWidth: '31rem',
  marginBottom: 30,
};
const longText = {
  marginBottom: 0,
  marginTop: 4,
};
const linkContainer = {
  marginTop: 33,
  padding: '13px 21px',
  borderRadius: '50px',
  textAlign: 'center',
  width: 200,
  backgroundImage: 'linear-gradient(to right top, #111d6b, #1c378e, #2253b3, #2471d9, #1e90ff)',
  color: '#fff',
  textTransform: 'uppercase',
  cursor: 'pointer',
  letterSpacing: 2,
};
const link = {
  margin: 0
}


const Section = props => (
  <div style={layoutStyle}>
    <div style={container}>
      <div style={whiteBackground} className="whiteBg" />
    <div style={contentWrapper} className="contentWrapper">
      <div style={singleContent} className="singleContent">
        <div style={box}>
          <h3>{props.title}</h3>
        </div>
        <div style={box}>
          <hr align="left" style={hr}/>
        </div>
        <div style={sectionText}>
          {props.lineOne && props.lineOne.split('/n').map(line => <p style={longText}>{line}</p>)}
        {props.lineTwo &&
          <div>
            <p>
              {props.lineTwo}
            </p>
          </div>
        }
        { props.lineThree &&
          <div>
            <p>
              {props.lineThree}
            </p>
          </div>
        }
        { props.link &&
        <div style={linkContainer} onClick={() => window.open(props.link, '_blank')}>
          <p style={link}>
            {props.linkTitle}
          </p>
        </div>
        }
        </div>
      </div>
      <div style={imageContainer} className="imageContainer">
        <img src={props.image} style={sectionImage} />
      </div>
    </div>
    </div>
  </div>
);

export default Section;