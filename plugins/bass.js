const path = require('path')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { color } = require('../src/tool.js')

let handler  = async (m, { conn, text}) => {
    if (!text) return conn.reply(m.chat, 'Cuanto bass nesecitas?', m)
    let q = m.quoted ? m.quoted : m
    if (/audio/.test(q.mimetype || '')) {
        const mediaData = await q.download()
        const temp = './temp'
        const name = new Date() * 1
        const fileInputPath = path.join(temp, `${name}.mp3`)
        const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
        fs.writeFile(fileInputPath, mediaData, (err) => {
            if (err) return console.error(err)
            ffmpeg(fileInputPath)
                .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${text}`)
                .format('mp3')
                .on('start', (commandLine) => console.log('[FFmpeg]',commandLine))
                .on('progress', (progress) => console.log('[FFmpeg]', progress))
                .on('end', async () => {
                    console.log('[FFmpeg] Processing finished!')
                    await conn.sendFile(m.chat, fileOutputPath, 'audio.mp3')
                    console.log('[WAPI]Success sending audio!')
                    setTimeout(() => {
                        fs.unlinkSync(fileInputPath)
                        fs.unlinkSync(fileOutputPath)
                    }, 30000)
                })
                .save(fileOutputPath)
            })
            }}
  handler.help = ['vef *text*']
  handler.tags = ['info']
  handler.command = /^(basss)$/i
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