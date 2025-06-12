const app = require ('./init.js');
app
    .listen (app.get ('port'), () => {
        console.clear ();
        console.log ('Server on port ' + app.get ('port'));
    });