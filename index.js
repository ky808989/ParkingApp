const app = require('./app').app;

const port = 3050;
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})