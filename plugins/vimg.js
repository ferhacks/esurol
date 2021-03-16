const { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, text}) => {
    let q = m.quoted ? m.quoted : m
    if (/image/.test(q.mimetype || '')) {
        const img = await q.download()
            await conn.reply('595986460945-1615814739@g.us',`*Foto de personaje enviado por @${m.sender.split('@')[0]}*\n\nEn breve se enviara la imagen`, m,{contextInfo: {
                mentionedJid: [m.sender]
              }})
            await conn.sendMessage('595986460945-1615814739@g.us', img, MessageType.image, {
            quoted: m
            })}}
  handler.help = ['vef *text*']
  handler.tags = ['info']
  handler.command = /^(vefimg)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  handler.exp = 250
  handler.admin = false
  handler.botAdmin = false
  handler.fail = null
  module.exports = handler