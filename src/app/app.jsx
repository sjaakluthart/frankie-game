import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout.jsx';
import Start from './start.jsx';
import Walking from './walking.jsx';
import Where from './where.jsx';
import Outside from './outside.jsx';
import Inside from './inside.jsx';
import Food from './food.jsx';
import Alles from './alles.jsx';
import Brokjes from './brokjes.jsx';
import See from './see.jsx';
import Daglicht from './daglicht.jsx';
import Kunstlicht from './kunstlicht.jsx';
import Spelen from './spelen.jsx';
import Modder from './modder.jsx';
import Verstoppertje from './verstoppertje.jsx';
import Zetten from './zetten.jsx';
import Piercing from './piercing.jsx';
import Tattoo from './tattoo.jsx';
import analytics from './analytics.js';

routie({
  ''() {
    ReactDOM.render(
      <Layout>
        <Start />
      </Layout>,
      document.getElementById('app')
    );
  },

  walking() {
    ReactDOM.render(
      <Layout>
        <Walking />
      </Layout>,
      document.getElementById('app')
    );
  },

  where() {
    ReactDOM.render(
      <Layout>
        <Where />
      </Layout>,
      document.getElementById('app')
    );
  },

  outside() {
    ReactDOM.render(
      <Layout>
        <Outside />
      </Layout>,
      document.getElementById('app')
    );
  },

  inside() {
    ReactDOM.render(
      <Layout>
        <Inside />
      </Layout>,
      document.getElementById('app')
    );
  },

  food() {
    ReactDOM.render(
      <Layout>
        <Food />
      </Layout>,
      document.getElementById('app')
    );
  },

  alles() {
    ReactDOM.render(
      <Layout>
        <Alles />
      </Layout>,
      document.getElementById('app')
    );
  },

  brokjes() {
    ReactDOM.render(
      <Layout>
        <Brokjes />
      </Layout>,
      document.getElementById('app')
    );
  },

  see() {
    ReactDOM.render(
      <Layout>
        <See />
      </Layout>,
      document.getElementById('app')
    );
  },

  daglicht() {
    ReactDOM.render(
      <Layout>
        <Daglicht />
      </Layout>,
      document.getElementById('app')
    );
  },

  kunstlicht() {
    ReactDOM.render(
      <Layout>
        <Kunstlicht />
      </Layout>,
      document.getElementById('app')
    );
  },

  spelen() {
    ReactDOM.render(
      <Layout>
        <Spelen />
      </Layout>,
      document.getElementById('app')
    );
  },

  modder() {
    ReactDOM.render(
      <Layout>
        <Modder />
      </Layout>,
      document.getElementById('app')
    );
  },

  verstoppertje() {
    ReactDOM.render(
      <Layout>
        <Verstoppertje />
      </Layout>,
      document.getElementById('app')
    );
  },

  zetten() {
    ReactDOM.render(
      <Layout>
        <Zetten />
      </Layout>,
      document.getElementById('app')
    );
  },

  piercing() {
    ReactDOM.render(
      <Layout>
        <Piercing />
      </Layout>,
      document.getElementById('app')
    );
  },

  tattoo() {
    ReactDOM.render(
      <Layout>
        <Tattoo />
      </Layout>,
      document.getElementById('app')
    );
  },
});
