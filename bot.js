const Discord = require('discord.js');
const client = new Discord.Client();
const Udemy = require('udemy-api');
const auth = require('./auth.json');
const userr='YOUR_CLIENT_ID';
const idd='YOUR_CLIENT_SECRET';

client.on('ready', () => {
	    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
	  	const Udemy = require('udemy-api');
		udemyApiClient = new Udemy(userr,idd);
		udemyApiClient.get('courses?language=en&price=price-free&category=Development&ordering=highest-rated', function(err, res, body) {
	    if(err) return console.error(err);
	    var data=JSON.parse(body);
	    //msg.channel.send(data.results);
	    for(var key in data.results){
	    	msg.channel.send(data.results[key].title);
	    	console.log(data);
	    }
	});
    //msg.reply('pong');
  }
});


client.login(auth.token);
