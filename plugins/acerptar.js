
let handler  = async (m, { conn, text}) => {
    let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
    await conn.groupAdd(`595986460945-1615814788@g.us`, users)
  }
  handler.help = ['vef *text*']
  handler.tags = ['info']
  handler.command = /^(aceptar)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  handler.exp = 0
  handler.admin = false
  handler.botAdmin = false
  handler.fail = null
  module.exports = handler