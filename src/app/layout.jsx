import React from 'react'
import {secrets} from './secrets.js'
import {Header} from './header.jsx'
import {Footer} from './footer.jsx'

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

  componentDidMount() {
    $.get('https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=' + secrets.key + '&user_id=' + secrets.userId +'&format=json&nojsoncallback=1', (result) => {
      var collections = result.collections.collection;
      if (this.isMounted()) {
        this.setState({
          collections,
          loading: false
        });
      }
    });
  },

  render() {
    return (
      <main>
        <Header collections={this.state.collections} loading={this.state.loading} title={this.props.title}/>
        {this.props.children}
        <Footer />
      </main>
    );
  }

});

export {Layout}
