import React from 'react';
import secrets from './secrets.js';

const Layout = React.createClass({

  displayName: 'Layout',

  propTypes: {
    children: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      collections: [],
      loading: true
    };
  },

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }

});

export default Layout;
