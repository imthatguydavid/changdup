import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';

class WhereToStay extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2 className="pageTitle">Where To Stay</h2>
            <strong>Residence Inn By Marriot Camarillo</strong>
            <div className={styles.address}>
              <p>2912 Petit Street</p>
              <p>Camarillo, California 93012</p>
            </div>

            <p>Rooms are ready to be reserved by calling reservations (800.321.2211) and referencing the <strong>Chang/Dela Wedding room block</strong>.</p>
            <p>All rooms must be booked by <strong>08/23/19</strong></p>
            <div className={styles.buttonContainer}>
              <button className="cta"><a href="https://www.marriott.com/events/start.mi?id=1556313200120&key=GRP" target="_blank">BOOK NOW</a></button>
              <button className="cta"><a href="https://goo.gl/maps/DhCYg4ygnd5unHwJ7" target="_blank">GET DIRECTIONS</a></button>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.354014258062!2d-119.0328243847806!3d34.21397808056224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8363d62dac87d%3A0xd8b158fceedc69ae!2sResidence+Inn+by+Marriott+Camarillo!5e0!3m2!1sen!2sus!4v1563753359226!5m2!1sen!2sus"
              width="450" height="450" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

      </div>
    )
  }
}
export default WhereToStay