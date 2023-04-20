const express = require("express");
const app = express();
const PORT = 3000;

app.post('/webhook', (req, res) => {
    console.log("Req: ", req);
    console.log("Req body: ", req.body);

    res.send("Webhook ok!!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
})