console.log('runnng app.js');

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/routes.js");
const cors = require("cors");

require("./db.js");


const server = express();
server.name = "API";

//==============MIDDLEWARES=========================
//server.use(cors());
// server.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//      next();
// });
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(express.json());
//server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/", routes);
server.use((err, req, res, next) => {
  // Error catching endware.
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error('app err');
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
