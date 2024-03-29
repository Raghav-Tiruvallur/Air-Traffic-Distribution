const express = require('express');
const PORT=5000
const app=express();
const cors = require('cors')
const apiRoutes = require("./routes")
var bodyParser = require('body-parser');
const fileUpload=require('express-fileupload')
app.use(fileUpload())
app.use(express.static("files"));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(cors());
app.use("/api",apiRoutes)


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
