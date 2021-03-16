let fetch = require('node-fetch')

let handler = async(m, { conn, command }) => {

let exp = global.DATABASE.data.users[m.sender].exp
let limit = global.DATABASE.data.users[m.sender].limit

}
handler.help = ['level']
handler.tags = ['fun']
handler.command = /^(level)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.admin = false
handler.botAdmin = false

module.exports = handler
