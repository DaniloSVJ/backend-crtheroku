"use strict";
'strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthenticateSessionService = _interopRequireDefault(require("../service/User/AuthenticateSessionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsRoutes = (0, _express.Router)(); //const appointments:Appointment[] = []

sessionsRoutes.post('/', async (request, response) => {
  const {
    email,
    password
  } = request.body;
  const authenticateUser = new _AuthenticateSessionService.default();
  const {
    user,
    token
  } = await authenticateUser.execute({
    email,
    password
  }); //delete user.email

  return response.json({
    user,
    token
  });
});
var _default = sessionsRoutes;
exports.default = _default;