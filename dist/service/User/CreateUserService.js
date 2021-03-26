"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _bcryptjs = require("bcryptjs");

var _user = _interopRequireDefault(require("../../models/user"));

var _AppErro = _interopRequireDefault(require("../../error/AppErro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  async execute({
    name,
    email,
    password
  }) {
    const userRepository = (0, _typeorm.getRepository)(_user.default);
    const checkUserExist = await userRepository.findOne({
      where: {
        email
      }
    });

    if (checkUserExist) {
      throw new _AppErro.default('Email  address already used', 401);
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 8);
    const user = userRepository.create({
      name,
      email,
      password: hashedPassword
    });
    await userRepository.save(user);
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;