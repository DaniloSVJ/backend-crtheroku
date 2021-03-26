"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _produtos = _interopRequireDefault(require("../models/produtos"));

var _typeorm = require("typeorm");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AppointmentsRepository = (_dec = (0, _typeorm.EntityRepository)(_produtos.default), _dec(_class = class AppointmentsRepository extends _typeorm.Repository {
  async fa(date) {
    const findAppointment = await this.findOne({
      where: {
        date
      }
    });
    return findAppointment || null;
  }

}) || _class);
var _default = AppointmentsRepository;
exports.default = _default;