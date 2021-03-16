let handler = async m => m.reply(`
╭─〘 Aiden𝗜 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [Esto se desactivo]
│ • Pero con que te suscribas a mi canal basta:)
│ https://www.youtube.com/channel/UCJbS-F7XER8DnGecXjWJJcg
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
