
const express = require('express')
const router = express.Router()
const superagent = require('superagent')
const debug = require('debug')('weather:index')
const dotenv = require('dotenv');
dotenv.config();

const APIKEY = process.env.APIKEY

let title = 'FormaServe - f_Weather'

let weatherText = ''
let error = null

/* GET home page. */
router.get('/', function(req, res, next) {
  debug('--> into index GET')
  res.render('index', {
    title,
    weather: weatherText,
    error: null
  })
})

router.post('/', function(req, res) {
  debug('--> into index POST')
  debug(`     API Key is ${APIKEY}`)

  let city = `${req.body.city},uk`
  let url = `http://api.openweathermap.org/data/2.5/weather`

  // Use SuperAgent to make the request
  superagent
    .post(url)
    .set('accept', 'json')
    .query({ q: city })
    .query({ appid: APIKEY })
    .query({ units: 'metric' })
    .end((err, result) => {
      if (err) {
        res.render('index', {
          title,
          weather: null,
          error: 'Error, please try again'
        })
      } else {
        debug(`Weather body: ${JSON.stringify(result.body, null, 2)}`)
        
        if (result.body.main == undefined) {
          result.render('index', {
            weather: null,
            error: 'Error, please try again'
          })
        } else {
          debug(`Temp is: ${result.body.main.temp}`)
          let weatherText = `Weather is ${result.body.weather[0].main},
            (${result.body.weather[0].description})
            ${result.body.main.temp} degrees C in ${result.body.name}!`

          res.render('index', {
            title,
            weather: weatherText,
            error: null
          })
        }
      }
    })
})

module.exports = router
