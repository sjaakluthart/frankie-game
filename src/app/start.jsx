import React from 'react'

const Start = React.createClass({

  displayName: 'Start',

  getInitialState() {
    return {
      started: false
    };
  },

  start() {
    this.setState({
      started: true
    });
  },

  render() {
    return (
      <section className="start">
        {this.state.started ? <p>Maak uw keuze</p> : <p><span className="start1">Dit is</span><span className="start2"> Frankie,</span></p>}
        <img src="assets/frankie.jpg" />
        {this.state.started ? <p><span className="left">modder</span><span className="right">bacon</span></p> : <p><span className="start3">Wat gaat Frankie</span><span className="start4"> beleven?</span></p>}
        {!this.state.started ? <p onClick={this.start}>start</p> : null}
      </section>
    );
  }
});

export {Start}
