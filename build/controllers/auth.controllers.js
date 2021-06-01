"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pool = require('../database');

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var registros, usuario;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);
            _context.next = 3;
            return pool.query("SELECT * FROM usuario where usuario = ? and contrasena = ? and estado ='A'", [req.body.usuario, req.body.password]);

          case 3:
            registros = _context.sent;
            console.log(registros, registros.length, registros[0].id);

            if (!(registros.length !== 1)) {
              _context.next = 8;
              break;
            }

            res.json("Usuario no existe");
            return _context.abrupt("return");

          case 8:
            usuario = {
              username: req.body.nombre,
              password: req.body.password
            };

            _jsonwebtoken["default"].sign({
              usuario: usuario
            }, 'secretkey', function (error, token) {
              res.json({
                token: token,
                id: registros[0].id,
                nombre: registros[0].nombre + " " + registros[0].apellido,
                usuario: registros[0].usuario
              });
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;