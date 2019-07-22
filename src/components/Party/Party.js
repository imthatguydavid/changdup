import React from 'react';
import styles from './index.module.scss';
import '../../App.scss';

function Party(props) {
    return (
      <div className={styles.container} style={{marginBottom: 34}}>
        <img src={props.image} className={styles.image}/>
          <div className={styles.nameCard}>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.name}>{props.name}</p>
        </div>
      </div>
    )
}
export default Party;