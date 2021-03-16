let fetch = require('node-fetch')
const { WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys')

let handler = async(m, { conn, args }) => {
    if (args[0] === 'true') {
        conn.reply(m.chat, `*Grupo Temporal habilitado éxito!*`, m)
        await conn.toggleDisappearingMessages(
            m.chat, 
            604800 // this is 1 week in seconds -- how long you want messages to appear for
        )
    } else if (args[0] === 'close') {
        conn.reply(m.chat, `*Grupo Temporal Deshabilitado con éxito!*`, m)
        await conn.toggleDisappearingMessages(m.chat, 0)
}}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(ephimeral)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

module.exports = handler
