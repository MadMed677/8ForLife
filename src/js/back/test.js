const app = require('express')();
app.set('port', (process.env.PORT || 5000));
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.listen(app.get('port'), () => console.log(`Running on port ${app.get('port')}`));
