let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
const fetch = require('node-fetch')

const getStickerMaker = (link) => new Promise((resolve, reject) => {
    fetch('https://api.areltiyan.site/sticker_maker?text='+encodeURIComponent(link), {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});
exports.getStickerMaker = getStickerMaker
`.trim(), m)
}
handler.command = /^(ttp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

