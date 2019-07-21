import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';

class WeddingDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2 className="pageTitle">Ceremony Details</h2>
            <p> September 21, 2019 @ 3:30pm</p>
            <p> Camarillo Ranch</p>
            <p> 201 Camarillo Ranch Road</p>
            <p> Camarillo, CA 93012</p>
            <button className="cta"><a href="https://changdup.app.rsvpify.com/" target="_blank">RSVP NOW</a></button>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.354014258062!2d-119.0328243847806!3d34.21397808056224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8363d62dac87d%3A0xd8b158fceedc69ae!2sResidence+Inn+by+Marriott+Camarillo!5e0!3m2!1sen!2sus!4v1563663339113!5m2!1sen!2sus"
              width="450" height="450" frameBorder="0"  allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
export default WeddingDetails