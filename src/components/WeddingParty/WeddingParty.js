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
              <Party title='Maid of Honor' name='Melissa De La Merced' image={require('../../static/melisa.png')} />
              <Party title='Bridesmaid' name='Sharon Chang' image={require('../../static/sharon.png')} />
              <Party title='Bridesmaid' name='Suzy Chang' image={require('../../static/suzy.png')} />
              <Party title='Bridesmaid' name='Molly Anabeza' image={require('../../static/molly.png')} />
              <Party title='Bridesmaid' name='Cheryl Directo' image={require('../../static/cheryl.png')} />
            </div>
          </div>
          <div className={styles.singleColumn}>
            <div className={styles.parentContainer}>
              <h3 className={styles.parentTitle}>Joseph's Parents</h3>
              <p className={styles.parents}>Mr. Hak Bum Chang</p>
              <p className={styles.parents}>Mrs. Hyun Sook Chang</p>
            </div>
            <div className={styles.parentContainer}>
              <h3 className={styles.parentTitle}>Erica's Parents</h3>
              <p className={styles.parents}>Mr. Eric De La Merced</p>
              <p className={styles.parents}>Mrs. Jocelyn De La Merced</p>
            </div>
            <div className={styles.sponsorContainer}>
              <h3 className={styles.sponsorTitle}>Principal Sponsors</h3>
              <p>Mr. Edwin and Mrs. Marylou Loualhati</p>
              <p>Mr. Jing and Mrs. Marissa De La Merced</p>
              <p>Mr. Alberto Jr. De La Merced and Ms. Priscila Loualhati</p>
            </div>
            <h3 className={styles.sponsorTitle}>Secondary Sponsors</h3>
            <div className={styles.sponsorContainer}>
              <p className={styles.secondSponsor}>Cord Sponsor</p>
              <p>Dr. Ken and Mrs. Michelle Urriquia</p>
            </div>
            <div className={styles.sponsorContainer}>
              <p className={styles.secondSponsor}>Veil Sponsor</p>
              <p>Mr. Matthew Tiguelo and Ms. Cindy Gondosaputro</p>
            </div>
            <div className={styles.sponsorContainer}>
              <p className={styles.secondSponsor}>Coin Sponsor</p>
              <p>Mr. Jeffrey Fajardo</p>
            </div>
            <div className={styles.sponsorContainer}>
              <p className={styles.secondSponsor}>Flower Girls</p>
              <p>Emma Urriquia</p>
              <p>Jhalene Anabeza</p>
            </div>
            <div className={styles.sponsorContainer}>
              <p className={styles.secondSponsor}>Ring Bearer</p>
              <p>Elliott Urriquia </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WeddingParty