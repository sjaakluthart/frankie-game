# portfolio-marieke

Portfolio website for my sister who studies Illustration at the Hogeschool van de Kunsten in Utrecht, the Netherlands. The content on the website is loaded from the flickr api using AJAX. I've made this version of the website to experiment with React, Bower, Browserify and Gulp.

Requirements:
* [Node.js](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Setup

Clone the repo with git:
```
git clone git@github.com:sjaakluthart/portfolio-marieke.git
```

### Installation

Install the node modules:
```
npm install
```

Install the bower components:
```
bower install
```

Add the settings file to the root directory, this is used by Gulp for deploying the project with ftp.

*settings.json*
```
{
    "host": "MY.FTP.HOST",
    "user": "MY.FTP.ACCOUNT",
    "pass": "MY-PASSWORD",
    "remotePath": "MY/REMOTE/PATH"
}
```

Add the secrets file to the React directory located at ./src/app/, this file contains my flickr API key, my sister's flickr userId and analytics id.

*secrets.js*
```
secrets = {
    key: 'MY_API_KEY',
    userId: 'MY_USER_ID',
    analytics: 'MY_ANALYTICS_ID'
}
```

Generate the development build and watch for any changes:
```
gulp dev
```

Generate the production build:
```
gulp production
```

### Running

To view the website run:
```
gulp serve
```
This will open your browser showing the project and reload with browserSync when the dist directory changes.

Your terminal should return something like:
```
[BS] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.22:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.22:3001
 -------------------------------------
[BS] Serving files from: dist
```
