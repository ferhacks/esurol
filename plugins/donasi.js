let handler = async m => m.reply(`
β­βγ Aidenπ γ
β β’ πππ¦πππ [Esto se desactivo]
β β’ Pero con que te suscribas a mi canal basta:)
β https://www.youtube.com/channel/UCJbS-F7XER8DnGecXjWJJcg
β°ββββ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
