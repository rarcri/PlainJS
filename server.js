var express = require("express");
var multer = require("multer");
var cors = require("cors");
var port = 3000;

var app = express();

app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./");
  },
  filename: function (req, file, cb) {
    cb(null, "image.png");
  },
});

var upload = multer({ storage: storage });

app.use(express.static(__dirname));
app.use("/uploads", express.static("uploads"));

app.post("/single", upload.single("profile-file"), function (req, res, next) {
  console.log(JSON.stringify(req.file));
  var response = '<a href="/">Home</a><br>';
  response += "Files uploaded successfully.<br>";
  return res.send(response);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
