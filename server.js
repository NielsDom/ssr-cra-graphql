import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import Html from './client/src/Html';
import App from './client/src/App';

const app = express();

// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use((req, res) => {
  res.status(200);
  const content = ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic();
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html content={content} helmet={helmet} />,
  );
  res.send(html);
  res.end();
});

const port = 8888;

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`Server started on ${port} port`);
});
