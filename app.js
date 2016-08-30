// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s poslouchá na %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: 'd48bda33-b85e-452a-b466-5a8464105729', appPassword: 'QK7xVaEpxcuQcP7WWCCoVmj' }); 
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Ahoj Světe!");
});