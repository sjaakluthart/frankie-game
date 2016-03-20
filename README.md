# Frankie Game


Requirements:
* [Node.js](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Setup

Clone the repo with git:
```
git clone git@github.com:sjaakluthart/frankie-game.git
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
