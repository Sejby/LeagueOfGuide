const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 400,
        height: 650,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.webContents.openDevTools();
    win.loadFile('index.html');
    win.setMenu(null);
    win.setMaximizable(false);
    win.setResizable(false);
}

app.whenReady().then(createWindow);