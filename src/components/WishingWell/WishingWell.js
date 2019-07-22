import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';

class WishingWell extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2 className="pageTitle">WishingWell</h2>
            <div className={styles.poem}>
              <p>More than just kisses so far we've shared</p>
              <p>Our home has been made with love and care</p>
              <p>Most things we need we’ve already got</p>
              <p>Like a toaster and kettle, pans and pots</p>
              <p> A wishing well we thought would be great</p>
              <p> (but only if you wish to participate)</p>
              <p> A gift of money is placed in the well</p>
              <p>Then make a wish … but do not tell</p>
              <p> Once we’ve replaced the old with the new</p>
              <p> We can look back and say it was thanks to you!</p>
              <p>And in return for your kindness we’re sure</p>
              <p> that one day soon you'll get what you wished for!</p>
            </div>
            <div className={styles.donations}>
              <button className="cta"><a href="https://www.honeyfund.com/wedding/ChangdUp" target="_blank">Wishing Well</a></button>
            </div>
          </div>
          <div className={styles.image}>
            <img src={require('../../static/wishing-well.png')} />
          </div>
        </div>
      </div>
    )
  }
}
export default WishingWell