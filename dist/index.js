'use strict';

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _electron2.default.app;
var BrowserWindow = _electron2.default.BrowserWindow;

var core = {
  window: undefined,

  appIsReady: function appIsReady() {
    this.createWindow();
  },
  appDidActivate: function appDidActivate() {
    if (!this.window) {
      this.createWindow();
      return;
    }

    if (this.window.isVisible()) {
      this.window.hide();
    } else {
      this.window.show();
    }
  },
  windowDidClose: function windowDidClose() {
    this.window = undefined;
  },
  createWindow: function createWindow() {
    if (this.window) {
      return;
    }
    this.window = new BrowserWindow({
      width: 370,
      height: 665,
      title: 'Codepen Overlay',
      frame: false
    });

    // Listen for events.
    this.window.on('close', this.windowDidClose);

    // Load file.
    this.window.loadURL('file://' + __dirname + '/index.html');

    this.window.webContents.openDevTools();
  }
};

app.on('ready', core.appIsReady.bind(core));
app.on('activate', core.appDidActivate.bind(core));