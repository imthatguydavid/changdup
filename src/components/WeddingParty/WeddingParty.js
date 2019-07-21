import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';
import Party from '../Party/Party';

class WeddingParty extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.group}>
            <h3 className={styles.title}>Groomsman</h3>
            <div className={styles.people}>
              <Party title='Best Man' name='Daniel Daegun Lee' image={require('../../static/daniel.png')} />
              <Party title='Groomsman' name='Andrew De La Merced' image={require('../../static/andrew.png')} />
              <Party title='Groomsman' name='Mikhail Hosain' image={require('../../static/mikhail.png')} />
              <Party title='Groomsman' name='Russ Gabrillo' image={require('../../static/russ.png')} />
              <Party title='Groomsman' name='David Kim' image={require('../../static/david.png')} />
            </div>
          </div>
          <div className={styles.group}>
            <h3 className={styles.title}>Bridal Party</h3>
            <div className={styles.people}>
              <Party title='Maid of Honor' name='Melissa De La Merced' image={require('../../static/melissa.png')} />
              <Party title='Bridesmaid' name='Sharon Chang' image={require('../../static/sharon.png')} />
              <Party title='Bridesmaid' name='Suzy Chang' image={require('../../static/suzy.png')} />
              <Party title='Bridesmaid' name='Molly Anabeza' image={require('../../static/molly.jpg')} />
              <Party title='Bridesmaid' name='Cheryl Directo' image={require('../../static/cheryl.png')} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WeddingParty