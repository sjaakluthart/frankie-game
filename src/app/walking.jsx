import React from 'react';

class Walking extends React.Component {
  componentDidMount() {
    window.setTimeout(() => {
      routie('#where');
    }, 3000);
  }

  render() {
    return (
      <section>
        <img src="assets/lopen.gif" />
      </section>
    );
  }
}

export default Walking;
