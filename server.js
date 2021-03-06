// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

  app.route('/api2014')
  .get((req, res) => {
    console.log('GET request detected');
    res.send('Got it');
  }) 
  .post(async (req, res) => {
    console.log('POST request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/p9kn-7u2k.json');
    const json = await data.json();
    console.log('Fetch request data', data);
    res.json(json);
  })
  .put(async (req, res) => {
    console.log('PUT Request detected')

  });

  app.route('/api2015')
  .get((req, res) => {
    console.log('GET request detected');
    res.send('Got it');
  }) 
  .post(async (req, res) => {
    console.log('POST request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json');
    const json = await data.json();
    console.log('Fetch request data', data);
    res.json(json);
  })
  .put(async (req, res) => {
    console.log('PUT Request detected')

  });

  app.route('/api2016')
  .get((req, res) => {
    console.log('GET request detected');
    res.send('Got it');
  }) 
  .post(async (req, res) => {
    console.log('POST request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/csi4-9jzc.json');
    const json = await data.json();
    console.log('Fetch request data', data);
    res.json(json);
  })
  .put(async (req, res) => {
    console.log('PUT Request detected')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
