const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.creator = "6285332039348@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.fake = `ššŖšššššš š©š Drixx š©šš š¾šššššØšš`
global.packname = ``
global.author = `ĆĶĆ ā­ā¬ā­ā¬ā­ā¬ š ā­ā¬ā­ā¬ā­ā¬ ĆĶĆ\nļ¾ ššæš²š®šš²š± šš Drixx\nļ¾ ššæš²š®šš¼šæ Drixx : š¬š“53332039348\nļ¾ Githun : LaxirMods\nāāāāāāāāāā`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.ownerNomor = '6285332039348'
global.ownerName = 'Creator Drizz'
global.ownerNumber = ["6285332039348@s.whatsapp.net"]
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})