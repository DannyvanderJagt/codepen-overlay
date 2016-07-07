'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _state = require('../state');

var _state2 = _interopRequireDefault(_state);

var _input = require('../components/input');

var _input2 = _interopRequireDefault(_input);

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
    key: 'back',
    value: function back() {
      _state2.default.set({ active: undefined });
    }
  }, {
    key: 'renderInputFields',
    value: function renderInputFields() {
      var pen = this.props.pen || {};

      if (!pen) {
        return;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_input2.default, { title: 'Id', pen: pen.id, name: 'id' }),
        _react2.default.createElement(_input2.default, { title: 'Title', pen: pen.id, name: 'title' }),
        _react2.default.createElement(_input2.default, { title: 'Subtitle', pen: pen.id, name: 'subtitle' }),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Left'
          ),
          _react2.default.createElement(
            'select',
            null,
            Object.keys(_state2.default.pens).map(function (key) {
              return _react2.default.createElement(
                'option',
                { value: key },
                _state2.default.pens[key].title
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Right'
          ),
          _react2.default.createElement(
            'select',
            null,
            Object.keys(_state2.default.pens).map(function (key) {
              return _react2.default.createElement(
                'option',
                { value: key },
                _state2.default.pens[key].title
              );
            })
          )
        ),
        _react2.default.createElement(_input2.default, { title: 'Gif', pen: pen.id, name: 'gif' }),
        _react2.default.createElement(_input2.default, { title: 'Time', pen: pen.id, name: 'time' }),
        _react2.default.createElement(_input2.default, { title: 'Credits', pen: pen.id, name: 'credits' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var pen = this.props.pen || {};

      var image = undefined;

      if (pen && pen.id) {
        image = _react2.default.createElement('div', {
          className: 'image',
          style: { backgroundImage: 'url(http://codepen.io/' + _state2.default.username + '/pen/' + pen.id + '/image/small.png)' },
          onMouseDown: this.back.bind(this) });
      }

      return _react2.default.createElement(
        'div',
        {
          id: 'details',
          className: 'view' + (this.props.pen ? ' active' : '') },
        _react2.default.createElement(
          'div',
          { className: 'pen' },
          image,
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
        this.renderInputFields()
      );
    }
  }]);

  return Details;
})(_react.Component);

exports.default = Details;