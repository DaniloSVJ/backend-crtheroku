"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateUserService = _interopRequireDefault(require("../service/User/CreateUserService"));

var _UpdateUserAvatarService = _interopRequireDefault(require("../service/User/UpdateUserAvatarService"));

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../config/upload"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRoutes = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default); //const appointments:Appointment[] = []

userRoutes.post('/', async (request, response) => {
  const {
    name,
    email,
    password
  } = request.body;
  const createUser = new _CreateUserService.default();
  const user = await createUser.execute({
    name,
    email,
    password
  }); //delete user.email

  return response.json(user);
});
userRoutes.patch('/avatar', _ensureAuthenticated.default, upload.single('avatar'), async (request, response) => {
  const updateUserAvatar = new _UpdateUserAvatarService.default();
  const user = await updateUserAvatar.execute({
    user_id: request.user.id,
    avatarFilename: request.file.filename
  });
  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at
  };
  return response.json(userWithoutPassword);
});
var _default = userRoutes;
exports.default = _default;