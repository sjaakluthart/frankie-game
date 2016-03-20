import React from 'react'
import ReactDOM from 'react-dom'
import {Layout} from './layout.jsx'
import {Home} from './home.jsx'
import {About} from './about.jsx'
import {Album} from './album.jsx'
import {Collection} from './collection.jsx'
import analytics from './analytics.js'

routie({

  ''() {
    ReactDOM.render(
      <Layout>
        <Home />
      </Layout>,
      document.getElementById('app')
    );
  },

  'about'() {
    ReactDOM.render(
      <Layout title="about">
        <About />
      </Layout>,
      document.getElementById('app')
    );
  },

  'album/:title/:albumId'(title, albumId) {
    ReactDOM.render(
      <Layout title={title}>
        <Album albumId={albumId} />
      </Layout>,
      document.getElementById('app')
    );
  },

  'collection/:title/:albumIds'(title, albumIds) {
    let albums = albumIds.split(',');
    ReactDOM.render(
      <Layout title={title}>
        <Collection albums={albums} title={title} />
      </Layout>,
      document.getElementById('app')
    );
  }

});
