
let handler  = async (m, { conn, text}) => {
    if (!text){
      conn.reply(m.chat,'Ingresa tu Ficha',m)
    }else {
    conn.reply('595986460945-1615814739@g.us',`*Ficha enviada por @${m.sender.split('@')[0]}*\n\nEn breve se enviara la ficha`, m,{contextInfo: {
        mentionedJid: [m.sender]
      }})
      conn.reply('595986460945-1615814739@g.us',`${text}`, m)
      conn.reply('595986460945-1615814739@g.us',`Para aceptarlo, Ponga el comando /aceptar ${m.sender.split('@')[0]}`, m)
      conn.reply(m.chat,`Se envió Tu ficha satisfactoriamente`,m)
    }
  }
  handler.help = ['vef *text*']
  handler.tags = ['info']
  handler.command = /^(vef)$/i
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