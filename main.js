const express = require('express')

const app = express()
app.use(logger)
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({mssg: `Welcome to the Body Mass Index Calculator, Send in your Height in meters (m) and Weight in kilo grams (kg) and you will get your Body Mass Index`})
})

app.post("/", (req, res) => {
    const {weight, height} = req.body
    bmi = weight / (height * height)
    if ( bmi > 18.5 && bmi < 24.9) {
        res.status(200).json({mssg: `Your Body Mass Index is : ${bmi} and it is normal`})
    } else if (bmi < 18.5) {
        res.status(200).json({mssg: `Your Body mass Index is : ${bmi} and it is too small, you should do something about it`})
    } else {
        res.status(200).json({mssg: `Your Body Mass Index is : ${bmi} and it is too large, you should do something about it`})
    }
})

app.listen(3000)

function logger (req, res, next) {
    console.log(req.path, req.method)
    next()
}