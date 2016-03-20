import React from 'react'

const About = React.createClass({

  displayName: 'About',

  render() {
    return (
      <section id="about">
        <img src="assets/marieke.jpg" alt="marieke" />
        <p>
          Sinds september 2014 studeer ik Illustratie aan de HKU in Utrecht. Tekenen en schilderen is mijn passie.
        </p>
        <p>
          Daarnaast ben ik ook gek op muziek. Mijn inspiratie haal ik uit het dagelijkse leven en de mensen om mij heen.
        </p>
        <p>
          Contact: <a href="mailto:mjluthart@gmail.com">mjluthart@gmail.com</a>
        </p>
      </section>
    );
  }

});

export {About}
