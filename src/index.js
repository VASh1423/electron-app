const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow  = new BrowserWindow({
    width: 800,
    height: 600,
  })

  mainWindow .loadFile('./src/index.html')

  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})