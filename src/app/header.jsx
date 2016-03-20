import React from 'react'
import {CollectionList} from './collection-list.jsx'

const Header = React.createClass({

  displayName: 'Header',

  propTypes: {
    collections: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string
  },

  showHome() {
    routie('');
  },

  showLoader() {
    return (
      <img src="assets/banana.gif" />
    );
  },

  showContent() {
    return (
      <nav>
        <CollectionList collections={this.props.collections} title={this.props.title} />
      </nav>
    );
  },

  render() {
    return (
      <header>
        <img onClick={this.showHome} src="assets/logo.svg" alt="logo" />
        {this.props.loading ? this.showLoader() : this.showContent()}
      </header>
    );
  }

});

export {Header}
