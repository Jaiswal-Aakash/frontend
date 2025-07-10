const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Optional: Remove trailing slashes from all routes (keep if desired)
function redirectTrailingSlash(req, res, next) {
  const paths = req.url.split("?");
  const pathPart = paths[0];
  const query = paths.length > 1 ? "?" + paths.slice(1).join("?") : "";

  if (pathPart.length > 1 && pathPart.endsWith('/')) {
    return res.redirect(301, pathPart.slice(0, -1) + query);
  }
  next();
}

// CORS middleware
function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
}

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT || 3000;

  server.use(corsMiddleware);
  server.use(redirectTrailingSlash);

  // Handle all requests - let Next.js handle static assets
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});











// // server.js
// const express = require('express')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handler = app.getRequestHandler()
// // Our Redirection Script
// function redirectTrailingSlash(req, res, next) {
//     let paths = req.url.split("?") // get url and query from request
//     let path = paths[0], query = null; // split request and query
//     if (paths.length > 1)
//         query = paths.slice(1, paths.length).join("?") // Rebuild query
    
//     if (path.substr(-1) == '/' && path.length > 1)
//         res.redirect(301, path.slice(0, -1) + ((query)?('?'+query):'')); // Redirect User with 301 and without the slash
//     else
//         next();
// }
// app.prepare().then(() => {
//   const port = process.env.PORT || 5000;
//   express()
//     .use(redirectTrailingSlash) // redirect handler (should be before nextjs handler)
//     .use(handler) // Regular next.js handler
//     .listen(port,()=>{
//      console.log(`server is listening on ${port}`)})
// })
