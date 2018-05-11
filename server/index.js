import path from "path";
import Express from "express";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from "react";
import { renderToString } from "react-dom/server";

import reducers from '../src/reducers'

import App from "../src/App";

const app = Express()
const port = 3000

app.use( Express.static( path.resolve( __dirname, "../build" ) ) );

// app.get( "/*", ( req, res ) => {
//     const jsx = ( <App /> );
//     const reactDom = renderToString( jsx );

//     res.writeHead( 200, { "Content-Type": "text/html" } );
//     res.end( htmlTemplate( reactDom ) );
// } );

app.listen( port );

function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux SRR Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
    `
}

function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(reducers)
  ​
    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ​
    // Grab the initial state from our Redux store
    const preloadedState = store.getState()
  ​
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}