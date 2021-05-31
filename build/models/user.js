"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  name: String,
  password: SVGStringList
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;