import Electron from 'electron';
const {app, BrowserWindow} = Electron;

let core = {
  window: undefined,

  appIsReady(){
    this.createWindow();
  },

  appDidActivate(){
    if(!this.window){ 
      this.createWindow()
      return;
    }


    if(this.window.isVisible()){
      this.window.hide();
    }else{
      this.window.show();
    }
  },

  windowDidClose(){
    this.window = undefined;
  },


  createWindow(){
    if(this.window){ return; }
    this.window = new BrowserWindow({
      width: 370,
      height: 665,
      title: 'Codepen Overlay',
      frame: false,
    })

    // Listen for events.
    this.window.on('close', this.windowDidClose);

    // Load file.
    this.window.loadURL(`file://${__dirname}/index.html`);

    this.window.webContents.openDevTools();

  }

};



app.on('ready', core.appIsReady.bind(core));
app.on('activate', core.appDidActivate.bind(core))