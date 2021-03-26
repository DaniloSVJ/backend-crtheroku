"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _user = _interopRequireDefault(require("../../models/user"));

var _auth = _interopRequireDefault(require("../../config/auth"));

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticateUserService {
  async execute({
    email,
    password
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_user.default);
    const user = await usersRepository.findOne({
      where: {
        email
      }
    });

    if (!user) {
      throw new _AppErro.default('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordMatched) {
      throw new _AppErro.default('Incorrect email/password combination.', 401);
    }

    const {
      secret,
      expiresIn
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: user.id,
      expiresIn
    });
    return {
      user,
      token
    };
  }

}

var _default = AuthenticateUserService;
exports.default = _default;