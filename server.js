const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
const config = {
  useNewUrlParser: true //have to use this block of code because the older parser is deprecated as of 1/15/2019
};

mongoose
  .connect(
    db,
    config
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use Routes this did not work when I had double quotes I needed a single quote for it to work
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`)); //this line originally did not work with '' had to use ``