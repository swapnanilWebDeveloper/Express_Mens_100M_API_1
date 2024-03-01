const express = require("express");
const router = require("./routers/men");
require("./db/conn");
require("./routers/men");

const app = express();
const port = process.env.port || 4040 ;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
});

