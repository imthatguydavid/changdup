import React from 'react'
class App extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1>Chang’d Up</h1>
          <p style={{marginBottom: 0, fontSize: 24,}}>Erica Joy De La Merced + Joseph Taejoon Chang</p>
          <img className="headerImage" src={require('../src/static/header-img.png')} />
          <h3>September 21, 2019</h3>
          <p>
            We want to invite you to be a part of one of the greatest day of
            our lives.
          </p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className="cta"><a href="https://changdup.app.rsvpify.com/" target="_blank">RSVP NOW</a></button>
          </div>
        </div>
      </div>
    )
  }
}
export default App