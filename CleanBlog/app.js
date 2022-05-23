import express from 'express';

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile('./temp/index.html')
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı!`);
});
