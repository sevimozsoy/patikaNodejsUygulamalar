import express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.sendFile(path.resolve('temp/index.html'));
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact',(req,res) => {
  res.render('contact')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
