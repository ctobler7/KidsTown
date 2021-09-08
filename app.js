const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const signature_pad = require("signature_pad");

const app = express();
const port = 3000;

const aboutContent = "Hello! We’re Kris and Becky Warburton. We both were born and raised here in Las Vegas. Kids Town’s conception began in 2012 when taking my daughters to the children’s museum. I, Becky, remember going to a children’s museum as a child and while I do not remember most of the museum, I remember the pretend play grocery store! I still remember the thrill I felt inside when I saw it. I had played many scenarios of pretend play at home, but now I was going to be able to really step into that imagination and act like an adult! I watched my daughters really enjoy the grocery store, just as I had as a child. However, this time, I got to experience what it is like to go as an adult bringing your child. I was thrilled that they were having fun, but I quickly realized there was no place for me to relax. It was a big museum and if I did not want to lose them in the museum, I would have to follow them around. I thought, “wouldn’t it be nice if this was in an enclosed area with comfortable seating for parents to be able to watch their children play safely?” I also noticed how simple and plain the setup was for them to play. My daughters did not seem to mind, but I could not help but imagine what the grocery store could look like if there was some attention paid to the details like Disneyland does on its Main Street, and what if there could be more shops making up an entire town of pretend play?  That is when I decided that I wanted to take on the challenge!  For the last several years I imagined and designed.  We had our twins in 2014 which put a bit of a pause on the dreaming, planning and constructing because that took up much of our energy.  However, we finally made this dream of mine a reality!  We hope you and your children will enjoy stepping out of the “real” world and getting immersed in this special place!";


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/'));



app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about", {content: aboutContent});
});

app.get("/waiver", function(req, res){
  res.render("waiver");
});

app.listen(port, function(req, res){
  console.log("Server is running on " + port);
});
