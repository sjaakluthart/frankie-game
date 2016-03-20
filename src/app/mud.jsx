import React from 'react'

const Mud = React.createClass({

  displayName: 'Mud',

  render() {
    return (
      <section className="mud">
        <p>
          <span className="oink1">oink</span>
          <span className="oink2">oink</span>
          <span className="oink3">oink</span>
        </p>
        <img src="assets/modder.jpg" />
        <p>modder</p>
      </section>
    );
  }
});

export {Mud}
