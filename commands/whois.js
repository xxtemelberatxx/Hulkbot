let snekfetch = require('snekfetch')

module.exports.run = (bot, message, args, discord) => {
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.")
    message.channel.send(`Okay, now looking up ${member.user.username} on ROBLOX...`).then(m => {
    snekfetch.get(`https://verify.eryn.io/api/user/${member.id}`)
    .then(response => {
      if (response.body.status == "ok") {
        m.edit(`Done! I found ${member.user.username} on ROBLOX! His/her username is ${response.body.robloxUsername}, and his/her ID is ${response.body.robloxId}.`)
      } else {
        m.edit(`I couldn't find ${member.user.username} on ROBLOX...`)
      }
    })
  })
}

module.exports.help = {
  name: "whois"
}
