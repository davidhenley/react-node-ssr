import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
    <html>
    <head>
      <title>React SSR App</title>
    </head>
    <body>
      ${content}
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Magic happens on port 3000');
});