'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _state = require('../state');

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'setValue',
    value: function setValue(props) {
      var value = undefined;

      if (props.value) {
        value = props.value;
      } else if (props.pen && props.name) {
        value = _state2.default.pens[props.pen][props.name];
      }

      if (!value) {
        value = '';
      }

      this.setState({ value: value });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setValue(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setValue(props);
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var value = event.target.value;

      if (this.props.pen && this.props.name) {
        _state2.default.setPen(this.props.pen, _defineProperty({}, this.props.name, value));
      }

      this.setState({ value: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'name' },
          this.props.title
        ),
        _react2.default.createElement('input', {
          className: 'value',
          type: 'text',
          value: this.state.value,
          onChange: this.onChange.bind(this) })
      );
    }
  }]);

  return Input;
})(_react.Component);

exports.default = Input;