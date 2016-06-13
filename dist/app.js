'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _titlebar = require('./components/titlebar');

var _titlebar2 = _interopRequireDefault(_titlebar);

var _overview = require('./views/overview');

var _overview2 = _interopRequireDefault(_overview);

var _details = require('./views/details');

var _details2 = _interopRequireDefault(_details);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components

// Views

// Data

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    _state2.default.setCallback(_this);

    _this.state = _state2.default;
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'app' },
        _react2.default.createElement(_titlebar2.default, null),
        _react2.default.createElement(_overview2.default, { pens: this.state.pens }),
        _react2.default.createElement(_details2.default, { pen: this.state.active ? this.state.pens[this.state.active] : undefined }),
        _react2.default.createElement('div', { id: 'bar' })
      );
    }
  }]);

  return App;
})(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('window'));