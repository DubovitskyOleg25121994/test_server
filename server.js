const express = require("express");
const app = express();
const port = 5000;

app.use((req, res, next) => {
  const responseSettings = {
    AccessControlAllowOrigin: req.headers.origin,
    AccessControlAllowHeaders:
      'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name',
    AccessControlAllowMethods: 'POST, GET, PUT, DELETE, OPTIONS',
    AccessControlAllowCredentials: true,
  };
  res.header(
    'Access-Control-Allow-Credentials',
    responseSettings.AccessControlAllowCredentials,
  );
  res.header(
    'Access-Control-Allow-Origin',
    responseSettings.AccessControlAllowOrigin,
  );
  res.header(
    'Access-Control-Allow-Headers',
    req.headers['access-control-request-headers']
      ? req.headers['access-control-request-headers']
      : 'x-requested-with',
  );
  res.header(
    'Access-Control-Allow-Methods',
    req.headers['access-control-request-method']
      ? req.headers['access-control-request-method']
      : responseSettings.AccessControlAllowMethods,
  );
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

require("./routers/api.router")(app);

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
