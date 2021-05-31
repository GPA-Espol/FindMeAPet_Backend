"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mascota = _interopRequireDefault(require("./routes/mascota.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import morgan from 'morgan';
var app = (0, _express["default"])();
app.use(_express["default"].json()); // app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.json('welcome');
});
app.use('/mascota', _mascota["default"]);
app.use('/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;