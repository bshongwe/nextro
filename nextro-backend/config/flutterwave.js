/**
 * Connects NeXtro to Flutterwave
 */
const axios = require('axios');

const flutterwave = axios.create({
  baseURL: 'https://api.flutterwave.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
  },
});

module.exports = flutterwave;
