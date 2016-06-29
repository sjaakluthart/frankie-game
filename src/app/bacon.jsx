import React from 'react';

const Bacon = React.createClass({

  displayName: 'Bacon',

  getInitialState() {
    return {
      bacon: false
    }
  },

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        bacon: true
      })
    }, 3000);
  },

  render() {
    return (
      <section className="bacon">
        {this.state.bacon ? <div><img className="strip" src="assets/bacon.jpg" /><p>bacon</p></div> : <div><img className="knife" src="assets/mes.jpg" /><img className="hook" src="assets/haak.jpg" /></div>}

      </section>
    );
  }

});

export default Bacon;
