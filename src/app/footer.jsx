import React from 'react'

const Footer = React.createClass({

  displayName: 'Footer',

  render: function() {
    var thisYear = new Date().getFullYear();

    return (
    	<footer>
    		&copy; {thisYear} Artwork door Marieke Luthart - Website door <a href="http://www.sjaakluthart.nl" target="blank">Sjaak Luthart</a>
    	</footer>
    );
  }

});

export {Footer}
