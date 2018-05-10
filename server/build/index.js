'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3001;

var staticFiles = _express2.default.static(_path2.default.join(__dirname, '../../client/build'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(staticFiles);

app.get('/', staticFiles);

app.all('*', staticFiles);

app.listen(PORT, function () {
  return console.log('Listening on port ' + PORT);
});