let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
conn.reply(m.chat, 'Berhasil menambahkan user sebagai Admin !',m)
}
handler.command = /^(promote|admin|\^)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

