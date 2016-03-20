import React from 'react'
import ReactDOM from 'react-dom'
import {Layout} from './layout.jsx'
import {Start} from './start.jsx'
import {Bacon} from './bacon.jsx'
import {Mud} from './mud.jsx'
import analytics from './analytics.js'

routie({

  ''() {
    ReactDOM.render(
      <Layout>
        <Start />
      </Layout>,
      document.getElementById('app')
    );
  },

  'mud'() {
    ReactDOM.render(
      <Layout>
        <Mud />
      </Layout>,
      document.getElementById('app')
    );
  },

  'bacon'() {
    ReactDOM.render(
      <Layout>
        <Bacon />
      </Layout>,
      document.getElementById('app')
    );
  }
});
