const bodyParser = require('body-parser');
const dbConnection = require('./dbConnection');
var nodemailer = require('nodemailer');

module.exports = app => {
    const connection = dbConnection();
    app.get('/',(req,res) =>{
        connection.query('SELECT nombre, valor, codigo, caracteristica FROM datos', (err,result) =>{
            res.render(__dirname + "/app/views/news.ejs",{
                news: result,
                correoPRE: "alejox1680@gmail.com"
            });
        });
    });

    app.post('/agregar',(req, res) =>{
        const { nombre, valor, codigo, caracteristica} = req.body;
        connection.query('INSERT INTO datos SET?',{
            nombre, valor, codigo, caracteristica
        },(err, result) =>{
            res.redirect('/');

        }); 
    });

    app.post('/editar', (req, res) =>{
        const { nombre, valor, codigo, caracteristica} = req.body;
        connection.query('UPDATE datos SET ? WHERE codigo = "'+ codigo + '"',{
            nombre, valor, codigo, caracteristica
        }, (err, result) =>{
            res.redirect('/');
        });
    });

    app.post('/eliminar',(req, res) =>{
        const {codigo} = req.body;
        connection.query('DELETE FROM datos WHERE codigo = "'+ codigo + '"',{
            nombre, valor, codigo, caracteristica
        },(err, result) =>{
            res.redirect('/');

        }); 
    });


    app.post('/recuperardatos',(req, res) =>{
        const {correoPRE, correo, asunto, cuerpo} = req.body;
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'alejox1680@gmail.com',
                pass: 'asssjfnnvnvv'
            }
        });

        var mensaje = cuerpo;

        var mailOptions = {
            from: correoPRE,
            to: correo,
            subject: asunto,
            text: mensaje
        };

        transporter.sendMail(mailOptions, function (error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });

        res.redirect('/');
    });

}