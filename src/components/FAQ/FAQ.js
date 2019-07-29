import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';

class FAQ extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2 className={styles.title}>F.A.Q.</h2>
            <div className={styles.grouping}>
              <p className={styles.question}>Where is the ceremony?</p>
              <p className={styles.answer}>Inside the Camarillo Ranch Barn</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Where is the reception?</p>
              <p className={styles.answer}>Outside the Camarillo Ranch estate lawn</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>What time should I arrive?</p>
              <p className={styles.answer}>Please arrive at 3:30PM. The ceremony is scheduled to start promptly at 4:00pm</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Do I have to mail back my RSVP or can I RSVP online?</p>
              <div className={styles.buttonContainer}>
                <button className="cta"><a href="https://changdup.app.rsvpify.com/" target="_blank">PLEASE RSVP ONLINE</a></button>
              </div>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>When should I RSVP by?</p>
              <p className={styles.answer}>August 30th</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>What is the dress code for your wedding?</p>
              <p className={styles.answer}>Formal</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Have you reserved hotel room blocks?</p>
              <p className={styles.answer}>Yes, please reserve at the Residence Inn by Marriot Camarillo. We have reserved a block of rooms under the name “Chang/De La.” Reservations should be made by August 23.</p>
              <div className={styles.buttonContainer}>
               <button className="cta"><a href="https://www.marriott.com/events/start.mi?id=1556313200120&key=GRP" target="_blank">BOOK NOW</a></button>
              </div>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Is there parking available near the ceremony and reception venues?</p>
              <p className={styles.answer}>There is ample parking inside the venue property and along the adjacent street. </p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Will the ceremony be taking place indoors or outdoors?</p>
              <p className={styles.answer}>Ceremony will take place indoors and reception will take place outdoors.</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Can I take pictures and/or post photos of your wedding on social media?</p>
              <p className={styles.answer}>Yes, please! Please use the <span className={styles.hashtag}>#ChangdUp</span></p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>What time is the reception scheduled to end?</p>
              <p className={styles.answer}>10:30PM</p>
            </div>
            <div className={styles.grouping}>
              <p className={styles.question}>Is there someone I can contact if I have any other questions about the wedding?</p>
              <p className={styles.answer}>For any additional questions, please contact Joseph Chang via email at Josephtjchang@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FAQ