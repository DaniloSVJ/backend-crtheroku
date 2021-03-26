"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _routes = _interopRequireDefault(require("./routes"));

require("./database");

var _AppErro = _interopRequireDefault(require("./error/AppErro"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json()); //app.use('/files',express.static(uploadConfig.directory))

app.use(_routes.default);
app.use((err, request, response, _) => {
  if (err instanceof _AppErro.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: err.message
  }); //'Internal server error' });
}); //routes.use("/appointments",appointmentsRouter)
//app.post('appointments')

app.listen(3000);