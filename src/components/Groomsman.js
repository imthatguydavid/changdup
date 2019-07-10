import React from 'react';

const nameCard = {
  backgroundColor: '#fff',
  boxShadow: '0 2px 24px 0 rgba(0,0,0,0.14)',
  width: '75%',
  margin: 'auto',
  transform: 'translateY(-1.8rem)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  padding: '13px 16px'
};
const carouselCard = {
  maxWidth: 400,
};
const carouselImageContainer = {

};
const title = {
  fontSize: 16,
  margin: '0 13px 0 0',

};
const name = {
  margin: 0,
  fontSize: 14,
};
const image = {
  objectFit: 'cover',
  width: '100%',
  minWidth: 300,
};


const Groomsman = props => (
  <div style={carouselCard}>
    <div style={carouselImageContainer}>
      <img src={props.image} style={image} />
    </div>
    <div style={nameCard}>
      <h6 style={title}>{props.title}</h6>
      <p style={name}>{props.name}</p>
    </div>
  </div>
);

export default Groomsman;