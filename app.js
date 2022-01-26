const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

/*we have to tell our server to serve static files from the
 public directory. You need to enable it using the following 
 built-in middleware:*/
// Make everything inside of public/ available
app.use(express.static('public'));

/*you don’t have to put public/ in the relative path when want 
to use anything from the public folder - the app will know that
if the static file is what you want to show/use, it will look for it inside public folder by default */

//define absolute path for views and let express know where views are
app.set("views", __dirname + "/views");
//have hbs to render all html documents
app.set("view engine", "hbs");

// send views/index.hbs for displaying in the browser
app.get("/", (req, res, next) => {
  let data = {
    name: "Ironhacker",
    lastName: "Rocking it!",
    address: {
      street: "Your heart",
      number: 87
    },
    cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]
  };

  res.render("index", data);
});


  app.listen(3000, () => 
  console.log('My first app listening on port 3000! '));