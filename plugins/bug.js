
let handler  = async (m, { conn, text}) => {
  if (!text){
    conn.reply(m.chat,'Ingresa el informe de errores de un amigo :)',m)
  }else {
    conn.reply('595962252137-1607818244@g.us',`*Reporte enviado de: @${m.sender.split('@')[0]}*\n\n${text}`, m,{contextInfo: {
      mentionedJid: [m.sender]
    }})
    conn.reply(m.chat,`Se envió un informe de error satisfactorio\n\nSabías el hecho impactante de que los informes falsos pueden ocasionar? *BANNED*`,m)
  }
}
handler.help = ['help *text*']
handler.tags = ['info']
handler.command = /^(help)$/i
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
