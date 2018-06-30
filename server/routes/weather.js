const actions = require('../../react-client/src/actions/types');

require('dotenv').config();
const express = require('express');

const router = express.Router();

// add EventSource dependency
const streamdataio = require('streamdataio-js-sdk/dist/bundles/streamdataio-node');
// add json patch dependency
const jsonPatch = require('fast-json-patch');

// targetUrl is the JSON API you wish to stream
// you can use this example API which simulates updating stocks prices from a financial market
const targetUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=8396af2ae78c659b32c7950d88eb78a9&zip=78701&units=imperial';

// appToken is the way Streamdata.io authenticates you as a valid user.
// you MUST provide a valid token for your request to go through.
const appToken = process.env.STREAMDATA;

router.get('/api/weather', (req, res) => {
  let eventSource = streamdataio.createEventSource(targetUrl, appToken);
  let result;
  const io = req.app.get('socketio');
  io.emit('action', { type: actions.WEATHER_REQUEST_RECEIVED });

  eventSource
    // the standard 'open' callback will be called when connection is established with the server
    .onOpen(() => {
      console.log('connected!');
    })
    // the streamdata.io specific 'data' event will be called when a fresh Json data set
    // is pushed by Streamdata.io coming from the API
    .onData((data) => {
      console.log('data received');
      // memorize the fresh data set
      result = data;
      io.emit('action', { type: actions.WEATHER_DATA_RECEIVED, data: result });
      console.log(result);
    })
    // the streamdata.io specific 'patch' event will be called when a fresh Json patch
    // is pushed by streamdata.io from the API. This patch has to be applied to the
    // latest data set provided.
    .onPatch((patch) => {
      // display the patch
      console.log('patch: ', patch);
      // apply the patch to data using json patch API
      jsonPatch.applyPatch(result, patch);
      console.log('RESULT', result);
      io.emit('action', { type: actions.WEATHER_DATA_UPDATE, data: result });
      // do whatever you wish with the update data
    })

    // the standard 'error' callback will be called when an error occur with the evenSource
    // for example with an invalid token provided
    .onError((error) => {
      console.log('ERROR!', error);
      eventSource.close();
      io.emit('action', { type: actions.WEATHER_REQUEST_ERROR, data: error });
    });

  eventSource.open();

  res.status(200).end('weather endpoint reached');
});

module.exports = router;
