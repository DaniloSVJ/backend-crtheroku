"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tmpFolder = _path.default.resolve(__dirname, '..', '..', 'tmp');

var _default = {
  directory: tmpFolder,
  storage: _multer.default.diskStorage({
    destination: tmpFolder,

    filename(request, file, callback) {
      const filehash = _crypto.default.randomBytes(10).toString('hex');

      const fileName = `${filehash}-${file.originalname}`; //console.log(fileName)

      return callback(null, fileName);
    }

  })
};
exports.default = _default;