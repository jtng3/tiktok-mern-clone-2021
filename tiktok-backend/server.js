import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = 9000;

// middleware - without this mongo cannot process the data.
app.use(express.json());
app.use((req, res, next) => {
  res.setHeaders("Access-Control-Allow-Origin", "*"),
    res.setHeaders("Access-Control-Allow-Headers", "*"),
    next();
});

// DB config
const connection_uri =
  "mongodb+srv://admin:xXZ2Bva44PDjJJA4@cluster0.xlpli.mongodb.net/tiktok-mern?retryWrites=true&w=majority";

try {
  // Connect to the MongoDB cluster
  mongoose
    .connect(connection_uri, {
      useNewUrlParser: true,
      //useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
      },
      (err) => {
        /** handle initial connection error */
        console.log("we in the err");
        console.log(err);
      }
    );
} catch (e) {
  console.log("mongoose could not connect");
}

// api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err + " ");
    } else {
      res.status(201).send(data);
    }
  });
  res.status(200).send(Data);
});

app.post("/v2/posts", (req, res) => {
  // POST request is to ADD DATA to the database
  // it will let us ADD a video DOCUMENT to the videos COLLECTION
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err + " ");
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`listening on local host: ${port}`));
