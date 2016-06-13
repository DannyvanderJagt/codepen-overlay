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

var Overview = (function (_Component) {
  _inherits(Overview, _Component);

  function Overview() {
    _classCallCheck(this, Overview);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Overview).apply(this, arguments));
  }

  _createClass(Overview, [{
    key: 'goToDetails',
    value: function goToDetails(id) {
      _state2.default.set({ active: id });
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      return Object.keys(this.props.pens).map(function (id) {
        var pen = _this2.props.pens[id];
        return _react2.default.createElement(
          'div',
          { className: 'pen', key: id, onMouseDown: _this2.goToDetails.bind(_this2, id) },
          _react2.default.createElement('div', { className: 'image', style: { backgroundImage: 'url(http://codepen.io/' + _state2.default.username + '/pen/' + id + '/image/large.png)' } }),
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
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'overview', className: 'view' },
        this.renderItems()
      );
    }
  }]);

  return Overview;
})(_react.Component);

exports.default = Overview;