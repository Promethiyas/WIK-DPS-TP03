import express = require("express")
const pingport = process.env.PING_LISTEN_PORT;
const app = express();
app.use((req : any, res : any, next : any) => {
    if (req.originalUrl != "/ping"){
        res.send('ERROR 404');
    }else{
        const os = require('os');
        var hostname = os.hostname(); 
        console.log("Hostname is:- " + hostname);
        let headers = req.headers;
        res.json(headers)
    }
    
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
