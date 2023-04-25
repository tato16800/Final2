const app = require('./server.js');
require('./news.js')(app);

app.listen(app.get('port'), () => {
    console.log('Servidor arriba en el puerto', app.get('port'));
})
