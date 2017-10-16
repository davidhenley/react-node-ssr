const express = require('express');
const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  // const content = renderToString(<Home />);

  // res.send(content);
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Magic happens on port 3000');
});