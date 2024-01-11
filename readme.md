# A Nodejs Express Weather App on IBM i

![FormaServe Logo](https://github.com/AndyYouens/NodeExpress-IBMi/blob/master/public/images/Logo.png)

This repo contains a NodeJS Express website that runs on IBM i.

It shows a weather app giving the current weather for a city in the UK.

## Pre-reqs

Requires Node.js on IBM i at least version 8, but would much prefer node 20!

## Install Instructions

These commands need to be run in a **BASH SHELL** session on your **IBM i**

Issue the following commands to clone the repo

```bash
git clone https://github.com/AndyYouens/f_Weather.git

```

Change into the f_weather directory

```bash
cd \f_Weather
```

Install dependancies

```bash
npm install
```

## Additional Setup

To use this application you will need an api key from OpenWeatherMap.

Get an API key by creating an account at [OpenWeatherMap](https://home.openweathermap.org/api_keys)

Once you have an API Key, it needs to be made available to the application.  Run the following command to achieve this.

```bash
export APIKEY=your_key_string
```
Save yourself time by placing your API key in a **.env** file in the root of this application.

Additionally, if you wish to change the PORT number this application runs on.  This also can be placed in the .env file.
An example .env file is shown below.

```bash
APIKEY=your_key_string
PORT=4000
DEBUG=weather
HOSTNAME=GALATEA
```

The .env file should **NOT** be included within source control and should be added to your .gitignore file.

Start application

```bash
npm start
```

if you wish to run the application in debug mode, run the following command instead.

```bash
npm run debug
```

Point your favourtie browser to https://your-IBMi:4000

## Authors

**FormaServe Systems Ltd** - _All work_ - [FormaServe](https://www.formaserve.co.uk)

# License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- **© 1990 - 2024 [FormaServe Systems Ltd](https://www.formaserve.co.uk)**

# Acknowledgments

> Andy Youens - FormaServe Systems Ltd - Twitter [@AndyYouens](https://twitter.com/AndyYouens)

# Published PowerWire Article

subscribe to our FREE monthly newsletter at (https://powerwire.eu)

[September 2020](https://powerwire.eu/a-weather-app-on-ibm-i/)

## Copyright

© 1990 - 2024 FormaServe Systems Ltd

## Open Source on IBM i - Oh Yea!

:wink:


