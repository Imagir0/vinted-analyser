const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const VITE_DEV_SERVER_URL = 'http://localhost:5173'; // URL du serveur Vite

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // facultatif
    },
  });

  if (isDev) {
    // Mode développement : charger Vite dev server
    win.loadURL(VITE_DEV_SERVER_URL);
    win.webContents.openDevTools(); // Ouvrir DevTools si vous voulez
  } else {
    // Mode production : charger le fichier buildé
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
