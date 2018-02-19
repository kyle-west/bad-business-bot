const db = require('./data.json');

function generateBBB () {
   var i = Math.floor(Math.random() * db.companies.length);  
   var j = Math.floor(Math.random() * db.nouns.length); 
   return getTransition(db.companies[i], db.nouns[j]);
}

function getTransition (company, noun) {
   switch(Math.floor(Math.random() * 5)) {
      case 0: return `It's like ${company} for ${noun}.`;
      case 1: return `Fancy new start-up idea! It's kind like ${company} for ${noun}.`;
      case 2: return `Has anyone ever done something like ${company} for ${noun}? I think it might be a good start-up.`;
      case 3: return `${company} for ${noun}. This could be huge!`;
      default: return `Guys, I got a great new business idea: ${company} for ${noun}.`;;
   } 
}


function runBot() {
   console.log(generateBBB());
   setTimeout(runBot, Math.floor(Math.random() * 1000 * 120))   
}

runBot();

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Bad Buisness Bot'); //write a response to the client
  res.end(); //end the response
}).listen(8080); 