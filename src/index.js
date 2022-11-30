// const path = require('path');
// const express = require('express');
// const app = express();
// // let hbs = require("hbs")
// app.use(express.static(path.join(__dirname, 'public')))

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
console.log("1")
console.log(path.join(__dirname, 'public'))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('HomePage')
})
app.get('/article', (req, res) => {
    res.render('Article')
})
app.get('/quiz', (req, res) => {
    res.render('Quiz')
})
app.get('/aboutus', (req, res) => {
    res.render('Aboutus')
})
app.listen(3000, () => {
    console.log(`LISTENING ON PORT 3000`)
})
// app.get('/', (req, res) => {
//     res.render('Article');
// })
// hbs.registerPartials(path.join(__dirname, "../templates/partials"))