const express = require("express");
const app = express();
const PORT = 4567;

app.post('http://91e5-2800-810-5a9-d83-e5d8-5ed1-7626-18c4.sa.ngrok.io/webhook',
    (req, res) => {
        console.log("Req: ", req);
        console.log("Req body: ", req.body);

        res.send("Webhook ok!!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
})