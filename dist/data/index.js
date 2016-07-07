'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = require('../state');

var _state2 = _interopRequireDefault(_state);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = {
  username: _state2.default.username,
  pens: {},

  collectPens: function collectPens() {
    var _this = this;

    (0, _request2.default)({
      url: 'http://codepen.io/' + this.username + '/public/feed/',
      xml: true
    }, function (error, response, body) {
      if (error) {
        throw error;
      }
      _xml2js2.default.parseString(body, _this.processData.bind(_this));
    });
  },
  processData: function processData(error, data) {
    if (error) {
      throw error;
    }

    if (!data.rss.channel[0]) {
      return;
    }
    if (!data.rss.channel[0].item) {
      return;
    }

    data.rss.channel[0].item.forEach(function (item) {
      var parts = item.guid[0].split('/');
      var id = parts[parts.length - 1];

      _state2.default.setPen(id, {
        id: id,
        title: item.title[0]
      });
    });
  }
};

Data.collectPens();

exports.default = Data;