import React from 'react'

const CollectionList = React.createClass({

  displayName: 'CollectionList',

  propTypes: {
    collections: React.PropTypes.array.isRequired,
    title: React.PropTypes.string
  },

  showAbout() {
    routie('#about');
  },

  showAlbum(collection) {
    if (collection.set.length === 1) {
      routie('#album/' + collection.title + '/' + collection.set[0].id);
    }

    if (collection.set.length > 1) {
      var albums = collection.set.map((album) => {
        return album.id;
      });
      routie('#collection/' + collection.title + '/' + albums);
    }
  },

  render() {
    return (
      <ul>
        {this.props.collections.map((collection, index) => {
          let boundClick = this.showAlbum.bind(this, collection);
          return <li className={this.props.title === collection.title ? 'current' : null} onClick={boundClick} key={index}><span>{collection.title}</span></li>;
        })}
        <li className={this.props.title === 'about' ? 'current' : null} onClick={this.showAbout}><span>Over mij</span></li>
      </ul>
    );
  }

});

export {CollectionList}
