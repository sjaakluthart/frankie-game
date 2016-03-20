import React from 'react'

const Bacon = React.createClass({

  displayName: 'Bacon',

  getInitialState() {
    return {
      bacon: false
    }
  },

  componentDidMount() {
    window.setTimeout(() => {
      console.log('timed out');
      this.setState({
        bacon: true
      })
    }, 2000);
  },

  render() {
    return (
      <section className="bacon">
        {this.state.bacon ? <div><img className="strip" src="assets/bacon.jpg" /><img className="strip" src="assets/bacon.jpg" /><img className="strip" src="assets/bacon.jpg" /><p>bacon</p></div> : <div><img className="knife" src="assets/mes.jpg" /><img className="hook" src="assets/haak.jpg" /></div>}

      </section>
    );
  }

});

export {Bacon}
