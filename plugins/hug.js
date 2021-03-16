const axios = require('axios')
const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'A quien quieres abrazar?', m)
    new Promise((resolve, reject) => {
        axios.get(`https://nekos.life/api/hug`)
            .then((res) => {
               conn.sendFile(m.chat, res.data.url, 'video.gif')
               const hug = `*@${m.sender.split('@')[0]} Abraza a ${text} owo*`
               conn.reply(m.chat, hug, false,{
                contextInfo: {
                mentionedJid: conn.parseMention(hug)}})
               

            })
            .catch(reject)
    })

}

handler.help = ['hug'].map(v => v + ' *arroba*')
handler.tags = ['fun']
handler.command = /^(hug)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
