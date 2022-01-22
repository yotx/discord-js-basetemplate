const { Message, Client } = require("discord.js");
const { Command } = require('reconlx')

module.exports = new Command ({
    name: "test", // command name eg !test
    aliases: ['t'], // other aliases eg !t

    run: async ({ client, message, args }) => {
        
        message.channel.send(`${client.ws.ping} ws ping`);
    },
});
