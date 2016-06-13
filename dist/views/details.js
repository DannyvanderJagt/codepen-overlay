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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = (function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Details).apply(this, arguments));
  }

  _createClass(Details, [{
    key: 'handleChange',
    value: function handleChange() {}
  }, {
    key: 'back',
    value: function back() {
      _state2.default.set({ active: undefined });
    }
  }, {
    key: 'render',
    value: function render() {
      var pen = this.props.pen || {};

      return _react2.default.createElement(
        'div',
        {
          id: 'details',
          className: 'view' + (this.props.pen ? ' active' : '') },
        _react2.default.createElement(
          'div',
          { className: 'pen' },
          _react2.default.createElement('div', {
            className: 'image',
            style: { backgroundImage: 'url(http://codepen.io/' + _state2.default.username + '/pen/' + pen.id + '/image/large.png)' },
            onMouseDown: this.back.bind(this) }),
          _react2.default.createElement(
            'div',
            { className: 'info' },
            _react2.default.createElement(
              'div',
              { className: 'item' },
              _react2.default.createElement('img', { src: './images/view.svg' }),
              _react2.default.createElement(
                'div',
                { className: 'text' },
                '10k view'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'item' },
              _react2.default.createElement('img', { src: './images/like.svg' }),
              _react2.default.createElement(
                'div',
                { className: 'text' },
                '102 likes'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'item' },
              _react2.default.createElement('img', { src: './images/comment.svg' }),
              _react2.default.createElement(
                'div',
                { className: 'text' },
                '3 comments'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Id'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.id || '', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Title'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.title || '', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Sub Title'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.subtitle || '', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Left'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.left || '', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Right'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.right || '', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Gif'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.gif || '', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Time'
          ),
          _react2.default.createElement('input', { className: 'value', type: 'text', value: pen.time || '', onChange: this.handleChange })
        )
      );
    }
  }]);

  return Details;
})(_react.Component);

exports.default = Details;