const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(require('./routes/covid19_ecu'));
app.use(require('./routes/provincias'));

app.listen(app.get('port'), () => {
    console.log(`Esta Api esta utilizando el puerto: `, app.get('port'));
});