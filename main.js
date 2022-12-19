const electron = require('electron');
const url = require('url');
const path = require('path');
require
const {app, BrowserWindow} = electron;

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 550
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})