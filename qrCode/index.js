const express = require ('express');
const app = express();
const QRCode = require('qrcode');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res)=> {
    res.render('index');
});

app.post('/generate', (req, res) => {
    const info = req.body.payment;

    QRCode.toDataURL( info, (err, src)=> {
        if (err) res.send("There was an error");
        else res.render('generate', {src});
    });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));