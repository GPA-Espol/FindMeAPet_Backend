"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMascotaById = exports.getMascotaById = exports.updateMascotaById = exports.createMascota = exports.getMascotas = void 0;

var _mascota = _interopRequireDefault(require("../models/mascota"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pool = require('../database');

var getMascotas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var registros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pool.query("SELECT * FROM mascota");

          case 2:
            registros = _context.sent;
            res.status(200).json(registros);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMascotas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMascotas = getMascotas;

var createMascota = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, edad, color, is_esterilizado, is_adoptado, is_caso_externo, is_adoptable, descripcion, sexo, fecha_adopcion, ubicacion, estado, id_personalidad, mascotaCreada;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.body.edad);
            _req$body = req.body, nombre = _req$body.nombre, edad = _req$body.edad, color = _req$body.color, is_esterilizado = _req$body.is_esterilizado, is_adoptado = _req$body.is_adoptado, is_caso_externo = _req$body.is_caso_externo, is_adoptable = _req$body.is_adoptable, descripcion = _req$body.descripcion, sexo = _req$body.sexo, fecha_adopcion = _req$body.fecha_adopcion, ubicacion = _req$body.ubicacion, estado = _req$body.estado, id_personalidad = _req$body.id_personalidad;

            if (!(nombre === undefined || edad === undefined || color === undefined || is_esterilizado === undefined || is_adoptado === undefined || is_caso_externo === undefined || is_adoptable === undefined || descripcion === undefined || sexo === undefined || fecha_adopcion === undefined || ubicacion === undefined || estado === undefined || id_personalidad === undefined)) {
              _context2.next = 5;
              break;
            }

            res.status(400).json("Debe llenar todos los campos");
            return _context2.abrupt("return");

          case 5:
            _context2.next = 7;
            return pool.query("insert into mascota(nombre,edad,color,is_esterilizado,is_adoptado,is_caso_externo,is_adoptable,descripcion,sexo,fecha_adopcion,ubicacion,estado,id_personalidad) values(?,?,?,?,?,?,?,?,?,?,?,?,?)", [nombre, edad, color, is_esterilizado, is_adoptado, is_caso_externo, is_adoptable, descripcion, sexo, fecha_adopcion, ubicacion, estado, id_personalidad]);

          case 7:
            mascotaCreada = _context2.sent;
            console.log(mascotaCreada);
            res.status(201).json("Mascota creada");

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createMascota(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createMascota = createMascota;

var updateMascotaById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateMascotaById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateMascotaById = updateMascotaById;

var getMascotaById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var registros;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return pool.query("SELECT * from mascota where id = ?", [req.params.mascotaId]);

          case 2:
            registros = _context4.sent;
            res.status(200).json(registros);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getMascotaById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getMascotaById = getMascotaById;

var deleteMascotaById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteMascotaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteMascotaById = deleteMascotaById;