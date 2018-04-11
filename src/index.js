const express = require('express')
const app = express()

const router = require('./action/router.js')

app.use(router.api, router.router)

app.listen(router.port)

console.log(`server is running port is ${router.port}`)