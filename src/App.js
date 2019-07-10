import React from 'react';
import './App.css';
import Carousel from '../src/components/Carousel';
import Groomsman from '../src/components/Groomsman';
import Section from '../src/components/Section';

// import 'src/index.css';

export default function App() {
  const weddingDetailsWhen = (
    <div className="locationContainer">
      <img src={require('../src/static/time.svg')}/>
      <p> September 21, 2019 @ 3pm</p>
    </div>
  );

  const weddingDetailLocation = (
    <div className="addressContainer">
      <img src={require('../src/static/location.svg')} />
      <div className="address">
        <p> Venue Name</p>
        <p> 123 Venue Address #420</p>
        <p> Camarillo, CA 90018</p>
      </div>
    </div>
  );

  const hotel = (
    <div className="locationContainer">
      <img src={require('../src/static/hotel.svg')}/>
      <p>Residence Inn Camarillo</p>
    </div>
  )

  const hotelAddress = (
    <div className="addressContainer">
      <img src={require('../src/static/location.svg')} />
      <div className="address">
        <p>Residence Inn Camarillo</p>
        <p>123 Venue Address #420</p>
        <p>Camarillo, CA 90018</p>
      </div>
    </div>
  )

  return (
    <div>
      <div className="header">
        <h1>Chang’d Up</h1>
        <p style={{marginBottom: 0, fontSize: 24,}}>Erica Joy De La Merced + Jospeh Taejoon Chang</p>
        <h3>September 21, 2019</h3>
        <p>
          We want to invite you to be a part of one of the greatest day of
          our lives.
        </p>
        <img className="headerImage" src={require('../src/static/header-img.png')} />
      </div>
      <Section
        title="Wedding Details"
        lineTwo={weddingDetailsWhen}
        lineThree={weddingDetailLocation}
        image={require('../src/static/wedding-details.png')}
        link='https://changdup.app.rsvpify.com/'
        linkTitle='RSVP NOW'
      />
      <div className="spacing"/>
      <Section
        title="Where To Stay"
        lineThree={hotelAddress}
        lineTwo='Rooms are ready to be reserved by calling reservations (800.321.2211) and referencing the Chang/Dela Wedding room block'
        link='https://www.marriott.com/events/start.mi?id=1556313200120&key=GRP'
        linkTitle='BOOK YOUR ROOM'
        image={require('../src/static/where-to-stay.png')}
      />
      <div className="spacer"/>
      <Carousel title="The Beautiful Ladies">
        <ul>
          <li><Groomsman image={require('../src/static/bio.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
        </ul>
      </Carousel>
      <Carousel title="The Handsome Men">
        <ul>
          <li><Groomsman image={require('../src/static/bio2.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio2.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio2.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio2.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio2.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
          <li><Groomsman image={require('../src/static/bio2.png')} title='Best Man' name='Daniel Daegun Lee'/></li>
        </ul>
      </Carousel>
      <Section
        title="Wedding Well"
        lineOne="More than just kisses so far we've shared /n

Our home has been made with love and care/n

Most things we need we’ve already got/n

Like a toaster and kettle, pans and pots/n

A wishing well we thought would be great/n

(but only if you wish to participate)/n

A gift of money is placed in the well/n

Then make a wish … but do not tell/n

Once we’ve replaced the old with the new/n

We can look back and say it was thanks to you!/n

And in return for your kindness we’re sure/n

that one day soon you'll get what you wished for!"
        image={require('../src/static/wishing-well.png')}
      />
      <div className="background" />
      <div className="footer">
        <h2> Thanks For Visiting</h2>
        <p>We hope to see you on our speceial day</p>
        <img src={require('../src/static/footer.png')} className="headerImage"/>
      </div>
    </div>
  )}

