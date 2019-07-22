import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';

class WeddingDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2 className="pageTitle">Ceremony</h2>
            <p> September 21, 2019 @ 3:30pm</p>
            <strong> Camarillo Ranch</strong>
            <div className={styles.address}>
              <p> 201 Camarillo Ranch Road</p>
              <p> Camarillo, CA 93012</p>
            </div>
            <button className="cta"><a href="https://changdup.app.rsvpify.com/" target="_blank">RSVP NOW</a></button>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.227072421801!2d-119.0201756841347!3d34.217219980561275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e83641c3f8bb53%3A0x3b3a16e768c49877!2sCamarillo+Ranch!5e0!3m2!1sen!2sus!4v1563752609132!5m2!1sen!2sus"
              width="450" height="450" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
export default WeddingDetails