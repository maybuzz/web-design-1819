'use strict'

const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const ejs = require('ejs')
const app = express()

app
  .use(express.static(path.join(__dirname, 'static')))
  .use(bodyParser.urlencoded({ extended: false }))
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))
  .get('/', index)
  .post('/', getDate)
  .get('/color', color)
  .post('/', pickedDate)
  .listen(process.env.PORT || 2000)

function index (req, res) {

  res.render('main')
}

function getDate(req, res) {
  
  const day = req.body.day
  const month = req.body.month
  const year = req.body.year

  console.log(req.body);
}

function color (req, res) {
  res.render('color')
}

function pickedDate (req, res) {

  const day = req.body.day
  const month = req.body.month
  const year = req.body.year

  console.log("picked date: ", day + month + year)
}
