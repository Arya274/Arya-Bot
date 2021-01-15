let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
const brainly = require('brainly-scraper')

module.exports = BrainlySearch = (pertanyaan, jumlah, cb) => {
    brainly(pertanyaan.toString(),Number(jumlah)).then((res) => {
        let brainlyResult = []
        res.data.forEach((ask) => {
            let opt = {
                pertanyaan: ask.pertanyaan,
                fotoPertanyaan: ask.questionMedia
            }
            ask.jawaban.forEach(answer => {
                opt.jawaban = {
                    judulJawaban: answer.text,
                    fotoJawaban: answer.media
                }
            })
            brainlyResult.push(opt)
            })
            return brainlyResult
    }).then(x => {
        cb(x)
    }).catch(err => {
        console.log(err.error)
    })
}
`.trim(), m)
}
handler.command = /^(brainly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

