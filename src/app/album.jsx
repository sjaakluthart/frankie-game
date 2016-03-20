import React from 'react'
import {secrets} from './secrets.js'

const Album = React.createClass({

  displayName: 'Album',

  propTypes: {
    albumId: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      album: {},
      loading: true
    };
  },

  componentDidMount() {
    this.setState({loading: true});

    $.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + secrets.key + '&photoset_id=' + this.props.albumId + '&user_id=' + secrets.userId +'&format=json&nojsoncallback=1', (result) => {
      this.setState({
        album: result.photoset,
        loading: false
      });
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({loading: true});

    $.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + secrets.key + '&photoset_id=' + nextProps.albumId + '&user_id=' + secrets.userId +'&format=json&nojsoncallback=1', (result) => {
      this.setState({
        album: result.photoset,
        loading: false
      });
    });
  },

  showLoader() {
    return <img id="loader" src="assets/banana.gif" />;
  },

  showContent() {
    return (
      <div>
        <ul>
          {this.state.album.photo.map((photo, index) => {
            var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';

            return <li key={index}><img src={url} alt={photo.title} /></li>;
          })}
        </ul>
        <h1>{this.state.album.title}</h1>
      </div>
    );
  },

  render() {
    return (
      <section id="imagesContent">
        {this.state.loading ? this.showLoader() : this.showContent()}
      </section>
    );
  }

});

export {Album}
