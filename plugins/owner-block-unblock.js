let handler = async (m, { text, conn, usedPrefix, command }) => {
let why = `*[β] πππΎ π΄πππΎπ½π΄πΎ, π΄πΉπ΄πΌπΏπ»πΎ:*\n*ββ ${usedPrefix + command} @${m.sender.split("@")[0]}*`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = [];
switch (command) {
case "blok": case "block":
if (who) await conn.updateBlockStatus(who, "block").then(() => { res.push(who); })
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
case "unblok": case "unblock":
if (who) await conn.updateBlockStatus(who, "unblock").then(() => { res.push(who); })
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
}
if (res[0]) conn.reply(m.chat, `*[β] ππ΄ πππΎ π²πΎπ½ π΄ππΈππΎ π΄π» π²πΎπΌπ°π½π³πΎ ${command} πΏπ°ππ° π΄π» ππππ°ππΈπΎ/π° ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}*`, m, { mentions: res })}
handler.command = /^(block|unblock)$/i
handler.rowner = true
export default handler
