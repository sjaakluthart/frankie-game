import React from 'react'
import update from 'react-addons-update'
import {secrets} from './secrets.js'

const Collection = React.createClass({

  displayName: 'Collection',

  propTypes: {
    albums: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      albums: []
    };
  },

  showAlbum(album) {
    routie('#album/' + album.title + '/' + album.id);
  },

  componentDidMount: function() {
    this.props.albums.forEach((albumId) => {
      $.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + secrets.key + '&photoset_id=' + albumId + '&user_id=' + secrets.userId +'&per_page=1&format=json&nojsoncallback=1',
      (result) => {
        var thumbnail = {
          photo: result.photoset.photo[0],
          albumId: albumId,
          title: result.photoset.title
        };
        this.setState({
          albums: update(this.state.albums, {$push: [thumbnail]})
        });
      });
    });
  },

  componentWillReceiveProps(nextProps) {
    // Reset state
    this.setState({
      albums: []
    });

    nextProps.albums.forEach((albumId) => {
      $.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + secrets.key + '&photoset_id=' + albumId + '&user_id=' + secrets.userId +'&per_page=1&format=json&nojsoncallback=1',
      (result) => {
        var thumbnail = {
          photo: result.photoset.photo[0],
          albumId: albumId,
          title: result.photoset.title
        };
        this.setState({
          albums: React.addons.update(this.state.albums, {$push: [thumbnail]})
        });
      });
    });
  },

  showLoader() {
    return <img id="loader" src="assets/banana.gif" />;
  },

  showContent() {
    return (
      <ul>
        {this.state.albums.map((album, index) => {
          var boundClick = this.showAlbum.bind(this, {id:album.albumId, title: this.props.title});
          var url = 'https://farm' + album.photo.farm + '.staticflickr.com/' + album.photo.server + '/' + album.photo.id + '_' + album.photo.secret + '_b.jpg';

          return (
            <li onClick={boundClick} key={index}>
              <img src={url} alt={album.photo.title} />
              <div><p>{album.title}</p></div>
            </li>
          );
        })}
      </ul>
    );
  },

  render() {
    return (
      <section id="imagesContent" className="collection">
        {this.props.albums.length === this.state.albums.length ? this.showContent() : this.showLoader()}
      </section>
    );
  }

});

export {Collection}
