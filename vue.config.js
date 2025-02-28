'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Admin Template' // page title

const fs = require('fs')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // 语法扫描
  lintOnSave: process.env.NODE_ENV === 'development',
  // productionSourceMap: false,
  devServer: {
    port: 9529,
    // 默认打开浏览器
    open: true,
    https: true,
    cert: fs.readFileSync(path.join(__dirname, './cert.crt')),
    key: fs.readFileSync(path.join(__dirname, './cert.key'))
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
