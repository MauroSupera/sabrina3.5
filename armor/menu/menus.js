const fs = require("fs")
const chalk = require("chalk")

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO config.js, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  

// MENU COMPLETO
const menu = (prefix, pushname, numerodn, adivinhaa, NomeDoBot,  wame) => {

return ` ╭══════════════ ⪩
╰╮き⃟❗𝐈𝐍𝐅𝐎 𝐃𝐎 𝐁𝐎𝐓❗⃟ き
╭┤⋟ 𝘔𝘦⧽ ${NomeDoBot}
┃│⋟ 𝘕𝘰𝘮𝘦⧽ ${pushname}
┃│⋟ 𝘚𝘦𝘶 𝘤𝘦𝘭𝘶𝘭𝘢𝘳⧽ ${adivinhaa}
┃│⋟ 𝘚𝘵𝘢𝘵𝘶𝘴⧽『 On-line 』
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟👤𝐍𝐎𝐕𝐎𝐒 𝐌𝐄𝐍𝐔𝐒👤⃟ き
┃│⋟ ${prefix}Menulogos
┃│⋟ ${prefix}Brincadeiras
┃│⋟ ${prefix}Menuadms
┃│⋟ ${prefix}Menudono
┃│⋟ ${prefix}Listaapps
┃│⋟ ${prefix}Listajogos
┃│⋟ ${prefix}Listaseries
┃│⋟ ${prefix}Listafilmes
┃│⋟ ${prefix}Menuanime
┃│⋟ ${prefix}Menuhentai
┃│⋟ ${prefix}Alteradores
┃│⋟ ${prefix}Menuprem
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🪀𝐔𝐒𝐔𝐀́𝐑𝐈𝐎𝐒🪀⃟ き
┃│⋟ ${prefix}Convite [Link]
┃│⋟ ${prefix}Bug [Questione]
┃│⋟ ${prefix}Sugestao [Questione]
┃│⋟ ${prefix}Ping
┃│⋟ ${prefix}Checarprem
┃│⋟ ${prefix}Comprarbot 
┃│⋟ ${prefix}Infodono
┃│⋟ ${prefix}Perfil
┃│⋟ ${prefix}Admins
┃│⋟ ${prefix}Suic
┃│⋟ ${prefix}Donos
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🔍𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒🔍⃟ き
┃│⋟ ${prefix}Pesquisar [Texto]
┃│⋟ ${prefix}Covidbr
┃│⋟ ${prefix}Covidmundo
┃│⋟ ${prefix}Google [Texto]
┃│⋟ ${prefix}Filme [Nome]
┃│⋟ ${prefix}Nerding [Texto]
┃│⋟ ${prefix}Gruposwhats [Texto]
┃│⋟ ${prefix}Mercadolivre [Texto]
┃│⋟ ${prefix}Live [Nome]
┃│⋟ ${prefix}Uptodown [Nome]
┃│⋟ ${prefix}Uptodown2 [Nome]
┃│⋟ ${prefix}Rexdl [Nome]
┃│⋟ ${prefix}Sfile [Nome]
┃│⋟ ${prefix}Happymod [Texto]
┃│⋟ ${prefix}Playstore [Texto]
┃│⋟ ${prefix}Celular [Nome] 
┃│⋟ ${prefix}Pinterest [Texto]
┃│⋟ ${prefix}Cep [Número]
┃│⋟ ${prefix}Anime [Nome]
┃│⋟ ${prefix}Manga [Nome]
┃│⋟ ${prefix}Lyrics [Nome] 
┃│⋟ ${prefix}Gitclone [Link]
┃│⋟ ${prefix}Gitstalker [Usuário]
┃│⋟ ${prefix}Mediafire [Link] 
┃│⋟ ${prefix}Mediafire2 [Link] 
┃│⋟ ${prefix}Wikipedia [Texto]
┃│⋟ ${prefix}Wikimedia [Texto]
┃│⋟ ${prefix}Docfake [Nome|5|apk]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🎰𝐉𝐎𝐆𝐎𝐒🎰⃟ き
┃│⋟ ${prefix}Akinator [Jogo]
┃│⋟ ${prefix}Perguntas [Eu Nunca]
┃│⋟ ${prefix}Pix [Número/Valor]
┃│⋟ ${prefix}Eununca [Jogo]
┃│⋟ ${prefix}Jogodaforca
┃│⋟ ${prefix}Dado [Interativo]
┃│⋟ ${prefix}Caracoroa 
┃│⋟ ${prefix}Minerar
┃│⋟ ${prefix}Quando [Pergunta]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🤍𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑🤍⃟ き
┃│⋟ ${prefix}Wallpaper [Texto]
┃│⋟ ${prefix}Wallpaperanime
┃│⋟ ${prefix}Listawallpaper
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟📷𝐄𝐅𝐄𝐈𝐓𝐎𝐒 𝐏/𝐈𝐌𝐆📷⃟ き
┃│⋟ ${prefix}Lgbt [Marcar-img]
┃│⋟ ${prefix}Comunismo [Marcar-img]
┃│⋟ ${prefix}Bolsonaro [Marcar-img]
┃│⋟ ${prefix}Affect [Marcar-img]
┃│⋟ ${prefix}Blur [Marcar-img]
┃│⋟ ${prefix}Blackdiscord [Marcar-img]
┃│⋟ ${prefix}Bluediscord [Marcar-img]
┃│⋟ ${prefix}Beautiful [Marcar-img]
┃│⋟ ${prefix}Circle [Marcar-img]
┃│⋟ ${prefix}Del [Marcar-img]
┃│⋟ ${prefix}Facepalm [Marcar-img]
┃│⋟ ${prefix}Invert [Marcar-img]
┃│⋟ ${prefix}Jail [Marcar-img]
┃│⋟ ${prefix}Rip [Marcar-img]
┃│⋟ ${prefix}Trash [Marcar-img]
┃│⋟ ${prefix}Wasted [Marcar-img]
┃│⋟ ${prefix}Sepia [Marcar-img]
┃│⋟ ${prefix}Pixelate [Marcar-img]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟📱𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒📱⃟ き
┃│⋟ ${prefix}Ytmp3 [Link]
┃│⋟ ${prefix}Ytmp4 [Link]
┃│⋟ ${prefix}Play [Nome] 
┃│⋟ ${prefix}Play2 [Nome] 
┃│⋟ ${prefix}Play3 [Nome]
┃│⋟ ${prefix}Play4 [Nome]
┃│⋟ ${prefix}Playaud [Nome]
┃│⋟ ${prefix}Playvid [Nome]
┃│⋟ ${prefix}Playvid2 [Nome]
┃│⋟ ${prefix}Playdoc [Nome]
┃│⋟ ${prefix}Playmp4 [Nome]
┃│⋟ ${prefix}Playmp3 [Nome]
┃│⋟ ${prefix}Audiomeme [Nome] 
┃│⋟ ${prefix}Tiktok [Link]
┃│⋟ ${prefix}Instagram [Link]
┃│⋟ ${prefix}Instagram2 [Link]
┃│⋟ ${prefix}Twitter [Link]
┃│⋟ ${prefix}SoundCloud [Link] 
┃╰══ ⪨ 
╰╦═════════════ ⪨
╭┤き⃟🎧𝐌𝐔́𝐒𝐈𝐂𝐀𝐒🎧⃟ き
┃│⋟ ${prefix}Motta
┃│⋟ ${prefix}Nanasai
┃│⋟ ${prefix}Dri
┃│⋟ ${prefix}Thefox
┃│⋟ ${prefix}Mikezin
┃│⋟ ${prefix}Magyn
┃│⋟ ${prefix}Lilchainz
┃│⋟ ${prefix}Vmz
┃│⋟ ${prefix}Kamaitachi
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🔞𝐂𝐎𝐌𝐀𝐍𝐃𝐎-𝐍𝐒𝐅𝐖🔞⃟ き
┃│⋟ ${prefix}Plaquinhas [Texto]
┃│⋟ ${prefix}Menuhentai
┃│⋟ ${prefix}Pornoaleatorio
┃│⋟ ${prefix}Xvideos [Texto]
┃│⋟ ${prefix}Hentaialeatorio
┃│⋟ ${prefix}Ayarla [Videos]
┃│⋟ ${prefix}Mirella [Videos]
┃╰══ ⪨ 
╰╦═════════════ ⪨
╭┤き⃟💭𝐅𝐑𝐀𝐒𝐄𝐒💭⃟ き
┃│⋟ ${prefix}Conselhobiblico
┃│⋟ ${prefix}Fuckmylife
┃│⋟ ${prefix}Cantadas
┃│⋟ ${prefix}Pensador [Nome]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🔖𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒🔖⃟ き
┃│⋟ ${prefix}Attp [Seu-Texto] 
┃│⋟ ${prefix}Attp2 [Seu-Texto] 
┃│⋟ ${prefix}Ttp [Seu-Texto] 
┃│⋟ ${prefix}Figaleatoria
┃│⋟ ${prefix}Carrinhofig
┃│⋟ ${prefix}Stickersearch [Nome]
┃│⋟ ${prefix}Toimg [Marcar-Fig] 
┃│⋟ ${prefix}Togif [Marcar-Fig] 
┃│⋟ ${prefix}Sticker [Marcar-Foto] 
┃│⋟ ${prefix}Figurinhas [Quantidade] 
┃│⋟ ${prefix}Semoji [Emoji] 
┃│⋟ ${prefix}Rename [Marcar-Fig]  
┃│⋟ ${prefix}Rename2 [Marcar-Fig]  
┃│⋟ ${prefix}Telesticker [Link]  
┃│⋟ ${prefix}Legenda [Texto] 
┃│⋟ ${prefix}Legenda2 [Txt|Txt]
┃│⋟ ${prefix}Cstiker [Marcar-Foto] 
┃│⋟ ${prefix}Sfundo [Marcar-Foto] 
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟📂𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒📂⃟ き
┃│⋟ ${prefix}Encurtalink
┃│⋟ ${prefix}Listabr
┃│⋟ ${prefix}Listafake
┃│⋟ ${prefix}Listaddi
┃│⋟ ${prefix}Lista-online
┃│⋟ ${prefix}Traduzir [Texto]
┃│⋟ ${prefix}Gtts pt [Texto] 
┃│⋟ ${prefix}Metadinha
┃│⋟ ${prefix}Metadinha2
┃│⋟ ${prefix}Metadinha3
┃│⋟ ${prefix}Metadinha4
┃│⋟ ${prefix}Packedits [P/Editores]
┃│⋟ ${prefix}Duelo [@/@/tempo]
┃│⋟ ${prefix}Encurtalink [Link]
┃│⋟ ${prefix}Gerarnick [Texto]
┃│⋟ ${prefix}Gerarnick2 [Texto]
┃│⋟ ${prefix}Infogrupo
┃│⋟ ${prefix}Videopralink
┃│⋟ ${prefix}Fakemsg [@|Msg|Msg2]
┃│⋟ ${prefix}Imgpralink
┃│⋟ ${prefix}Tomp3
┃│⋟ ${prefix}Gerarlink 
┃│⋟ ${prefix}Level
┃│⋟ ${prefix}Ranklevel
┃│⋟ ${prefix}Correio
┃│⋟ ${prefix}Ping
┃│⋟ ${prefix}Wame [Mensagem]
┃╰══ ⪨
╰══════════════ ⪨`
}

exports.menu = menu

// MENU DE LOGOS
const menulogos = (prefix) => {

  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭══════════════ ⪩
╰╮き⃟🎨𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒🎨⃟ き
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🎨𝟐 𝐓𝐄𝐗𝐓𝐎𝐒🎨⃟ き
┃│⋟ ${prefix}Comporn [txt/txt]
┃│⋟ ${prefix}Glitch [txt/txt]
┃│⋟ ${prefix}Glitch3 [txt/txt]
┃│⋟ ${prefix}Grafity [txt-txt]
┃│⋟ ${prefix}Space [txt/txt]
┃│⋟ ${prefix}Marvel [txt/txt]
┃│⋟ ${prefix}GamePlay [txt/txt]
┃│⋟ ${prefix}Stone [txt/txt]
┃│⋟ ${prefix}Steel [txt/txt]
┃│⋟ ${prefix}Ffbanner [txt/txt]
┃│⋟ ${prefix}Avatar [txt/txt]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🎨𝟏 𝐓𝐄𝐗𝐓𝐎🎨⃟ き
┃│⋟ ${prefix}Txtquadrinhos [txt]
┃│⋟ ${prefix}HackNeon [txt]
┃│⋟ ${prefix}EquipeMascote [txt]
┃│⋟ ${prefix}FFavatar [txt]
┃│⋟ ${prefix}Gizquadro [txt]
┃│⋟ ${prefix}Angelglx [txt]
┃│⋟ ${prefix}WingEffect [txt]
┃│⋟ ${prefix}Angelwing [txt]
┃│⋟ ${prefix}Blackpink [txt]
┃│⋟ ${prefix}Girlmascote [txt]
┃│⋟ ${prefix}Mascotegame [txt]
┃│⋟ ${prefix}Fpsmascote [txt]
┃│⋟ ${prefix}Logogame [txt]
┃│⋟ ${prefix}Glitch2 [txt]
┃│⋟ ${prefix}3DGold [txt]
┃│⋟ ${prefix}Placaloli [txt]
┃│⋟ ${prefix}Phadow [txt]
┃│⋟ ${prefix}Efeitoneon [txt]
┃│⋟ ${prefix}Cemiterio [txt]
┃│⋟ ${prefix}Metalgold [txt]
┃│⋟ ${prefix}Narutologo [txt]
┃│⋟ ${prefix}Fire [txt]
┃│⋟ ${prefix}Romantic [txt]
┃│⋟ ${prefix}Smoke [txt]
┃│⋟ ${prefix}Papel [txt]
┃│⋟ ${prefix}Lovemsg [txt]
┃│⋟ ${prefix}Lovemsg2 [txt]
┃│⋟ ${prefix}Lovemsg3 [txt]
┃│⋟ ${prefix}Coffecup [txt]
┃│⋟ ${prefix}Coffecup2 [txt]
┃│⋟ ${prefix}Cup [txt]
┃│⋟ ${prefix}Florwooden [txt]
┃│⋟ ${prefix}Lobometal [txt]
┃│⋟ ${prefix}Harryp [txt]
┃│⋟ ${prefix}Txtborboleta [txt]
┃│⋟ ${prefix}Madeira [txt]
┃│⋟ ${prefix}Pornhub [txt]
┃│⋟ ${prefix}Escudo [txt]
┃│⋟ ${prefix}Transformer [txt]
┃│⋟ ${prefix}America [txt]
┃│⋟ ${prefix}Demongreen [txt]
┃│⋟ ${prefix}Wetglass [txt] 
┃│⋟ ${prefix}Toxic [txt]
┃│⋟ ${prefix}Neon3 [txt]
┃│⋟ ${prefix}Neondevil [txt]
┃│⋟ ${prefix}Neongreen [txt]
┃│⋟ ${prefix}Lava [txt]
┃│⋟ ${prefix}Halloween [txt]
┃│⋟ ${prefix}Neondevil [txt]
┃│⋟ ${prefix}DemonFire [txt]
┃│⋟ ${prefix}DemonGreen [txt]
┃│⋟ ${prefix}Thunderv2 [txt]
┃│⋟ ${prefix}Thunder [txt]
┃│⋟ ${prefix}Colaq [txt]
┃│⋟ ${prefix}Luxury [txt]
┃│⋟ ${prefix}Berry [txt]
┃│⋟ ${prefix}Transformer [txt]
┃│⋟ ${prefix}Matrix [txt]
┃│⋟ ${prefix}Horror [txt]
┃│⋟ ${prefix}Nuvem [txt]
┃│⋟ ${prefix}Neon [txt]
┃│⋟ ${prefix}Neon1 [txt]
┃│⋟ ${prefix}Neon2 [txt]
┃│⋟ ${prefix}Neon3d [txt]
┃│⋟ ${prefix}NeonGreen [txt]
┃│⋟ ${prefix}Neon3 [txt]
┃│⋟ ${prefix}Neve [txt]
┃│⋟ ${prefix}Areia [txt]
┃│⋟ ${prefix}Vidro [txt]
┃│⋟ ${prefix}Style [txt]
┃│⋟ ${prefix}Pink [txt]
┃│⋟ ${prefix}Carbon [txt]
┃│⋟ ${prefix}Tetalblue [txt]
┃│⋟ ${prefix}Toxic [txt]
┃│⋟ ${prefix}Jeans [txt]
┃│⋟ ${prefix}Ossos [txt]
┃│⋟ ${prefix}Asfalto [txt]
┃│⋟ ${prefix}3dgoldenblack [txt]
┃│⋟ ${prefix}3d_business [txt]
┃│⋟ ${prefix}Summer [txt]
┃│⋟ ${prefix}Natal [txt]
┃│⋟ ${prefix}Joker [txt]
┃│⋟ ${prefix}Blood [txt]
┃│⋟ ${prefix}Break [txt]
┃│⋟ ${prefix}Fiction [txt]
┃│⋟ ${prefix}3dstone [txt]
┃│⋟ ${prefix}Lapis [txt]
┃│⋟ ${prefix}Gelo [txt]
┃│⋟ ${prefix}Rainbow [txt]
┃│⋟ ${prefix}Metalfire [txt] 
┃│⋟ ${prefix}Cria [txt] 
┃│⋟ ${prefix}Anime1 [txt] 
┃│⋟ ${prefix}Anime2 [txt] 
┃│⋟ ${prefix}Ff1 [txt] 
┃│⋟ ${prefix}Ff2 [txt] 
┃│⋟ ${prefix}Game [txt] 
┃│⋟ ${prefix}Entardecer [txt] 
┃│⋟ ${prefix}Indian [txt] 
┃│⋟ ${prefix}Ffrose [txt] 
┃│⋟ ${prefix}Ffgren [txt] 
┃│⋟ ${prefix}Chufuyu [txt] 
┃│⋟ ${prefix}Wolf [txt] 
┃│⋟ ${prefix}Dragonred [txt] 
┃│⋟ ${prefix}Purple [txt] 
┃╰══ ⪨
╰══════════════ ⪨
`
}

exports.menulogos = menulogos

// MENU DO PROPRIETÁRIO
const menudono = (prefix) => {

  return `╭══════════════ ⪩
╰╮き⃟️👑𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎👑️⃟ き
╭┤⋟ ${prefix}Nick-dono [Nome]
┃│⋟ ${prefix}Nome-bot [Nome]
┃│⋟ ${prefix}Numero-dono [Número]
┃│⋟ ${prefix}Prefixo-bot [Prefixo]
┃│⋟ ${prefix}Foto-menu [Mencione a img]
┃│⋟ ${prefix}Enviar-index [Envia o index.js]
┃│⋟ ${prefix}Enviar-index2 [Envia o sabrina.js]
┃│⋟ ${prefix}Vemqrcode [Envia o qr-code]
┃│⋟ ${prefix}Update-index [Atualiza sabrina.js]
┃│⋟ ${prefix}Uptade-index2 [Atualiza index.js]
┃│⋟ ${prefix}Premiumlist
┃│⋟ ${prefix}Recrutar [@Mencione ou Número]
┃│⋟ ${prefix}Addpremium [@Mencione]
┃│⋟ ${prefix}Delpremium [@Mencione]
┃│⋟ ${prefix}Reiniciar
┃│⋟ ${prefix}Reviverqr
┃│⋟ ${prefix}Arquivargp
┃│⋟ ${prefix}Criargp [Nome]
┃│⋟ ${prefix}Crashuser [Número]
┃│⋟ ${prefix}Crashgrupo
┃│⋟ ${prefix}Travacrash [Número]
┃│⋟ ${prefix}Figucrash
┃│⋟ ${prefix}Entrar [Link-Grupo]
┃│⋟ ${prefix}Antipvon
┃│⋟ ${prefix}Antipvoff
┃│⋟ ${prefix}Modos [Priv/Public]
┃│⋟ ${prefix}Fotobot [@Mencione]
┃│⋟ ${prefix}Bcgroup [Texto]
┃│⋟ ${prefix}Tmpvs [Texto]
┃│⋟ ${prefix}Setnamewpp [Texto]
┃│⋟ ${prefix}Setrecado [Texto]
┃│⋟ ${prefix}Ativo
┃│⋟ ${prefix}Ausente [Mensagem]
┃│⋟ ${prefix}Msg [Numero|Msg]
┃│⋟ ${prefix}Tempodesair [Data]
┃│⋟ ${prefix}Blockuser [@Mencione]
┃│⋟ ${prefix}Unblockuser [@Mencione]
┃│⋟ ${prefix}Blockpv [@Mencione]
┃│⋟ ${prefix}Unblockpv [@Mencione]
┃│⋟ ${prefix}Listablock-tmp
┃│⋟ ${prefix}Block-tmp [@Mencione 1d]
┃│⋟ ${prefix}Unblock-tmp [@Mencione]
┃│⋟ ${prefix}Clonargp [Selecione]
┃│⋟ ${prefix}Seradm [Vira admin]
┃│⋟ ${prefix}Sermembro [Vira membro]
┃│⋟ ${prefix}Divulgar [Texto de Divulgação]
┃│⋟ ${prefix}Divulgar2 [Link do grupo|Seu Texto]
┃│⋟ ${prefix}Dono1 [@Mencione]
┃│⋟ ${prefix}Dono2 [@Mencione]
┃│⋟ ${prefix}Dono3 [@Mencione]
┃│⋟ ${prefix}Dono4 [@Mencione]
┃│⋟ ${prefix}Dono5 [@Mencione]
┃│⋟ ${prefix}Dono6 [@Mencione]
┃│⋟ ${prefix}Unblockcmd [Comando]
┃│⋟ ${prefix}Blockcmd [Comando]
┃│⋟ ${prefix}Listacomandos
┃│⋟ ${prefix}Getcase
┃│⋟ ${prefix}Antispam [1/0]
┃│⋟ ${prefix}Listagp [Lista-Grupos]
┃│⋟ ${prefix}Banghost
┃│⋟ ${prefix}Serpremium
┃│⋟ ${prefix}Antipv [1/0]
┃│⋟ ${prefix}Ganharxp
┃│⋟ ${prefix}Ganharlevel
┃╰══ ⪨
╰══════════════ ⪨`
}

exports.menudono = menudono

const menuprem = (prefix) => {

  return `╭══════════════ ⪩
╰╮き⃟️👑𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌👑️⃟ き
╭┤⋟ ${prefix}Encurtalink [Link]
┃│⋟ ${prefix}Ddd [Número DDD]
┃│⋟ ${prefix}Gerarcpf2 
┃│⋟ ${prefix}Apagar [Mencionar]
┃│⋟ ${prefix}Premiumlist
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟️🔛𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒️🔛️⃟ き
┃│⋟ ${prefix}Tel [Número]
┃│⋟ ${prefix}Nome [Nome]
┃│⋟ ${prefix}Cpf  [Número]
┃│⋟ ${prefix}Cpf2 [Número]
┃│⋟ ${prefix}Cpf3 [Número]
┃│⋟ ${prefix}Cpf4 [Número]
┃│⋟ ${prefix}Cnpj [Número]
┃│⋟ ${prefix}Cns [Número]
┃│⋟ ${prefix}Placa [Número]
┃│⋟ ${prefix}Bin [Número]
┃│⋟ ${prefix}Cep [Número]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟️🔞️𝐍𝐒𝐅𝐖-𝐏𝐑𝐄𝐌𝐈𝐔𝐌🔞️⃟ き
┃│⋟ ${prefix}Pornoaleatorio
┃│⋟ ${prefix}Xvideos [Texto]
┃│⋟ ${prefix}Hentaialeatorio
┃│⋟ ${prefix}Miakhalifa
┃│⋟ ${prefix}Mirella
┃│⋟ ${prefix}Ayarla
┃╰══ ⪨
╰══════════════ ⪨
`
}

exports.menuprem = menuprem

// MENU DE GERADORES
const geradores = (prefix) => {
  
  return `╭══════════════ ⪩
╰╮き⃟⚙️𝐆𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒⚙️⃟ き
╭┤⋟ ${prefix}Gerarcarro
┃│⋟ ${prefix}Gerarrenavam
┃│⋟ ${prefix}Dadosfake
┃│⋟ ${prefix}Gerarcpf
┃│⋟ ${prefix}Gerarcep
┃│⋟ ${prefix}Gerarprocesso
┃│⋟ ${prefix}Gerarcnae
┃│⋟ ${prefix}Gerarcnh
┃│⋟ ${prefix}Gerarcnpj
┃│⋟ ${prefix}Gerarcertidão
┃╰══ ⪨
╰══════════════ ⪨
`
}

exports.geradores = geradores

// MENU BRINCADEIRAS
const brincadeiras = (prefix) => {
  
return `╭══════════════ ⪩
╰╮き⃟🎰𝐉𝐎𝐆𝐎𝐒🎰⃟ き
╭┤⋟ ${prefix}Akinator
┃│⋟ ${prefix}Jogodaforca
┃│⋟ ${prefix}Resetforca
┃│⋟ ${prefix}Jogodavelha [@Mencione]
┃│⋟ ${prefix}Simi [Pergunte oq quiser]
┃│⋟ ${prefix}Quando [Pergunte ao bot]
┃│⋟ ${prefix}Cassino [Jogo-Frutas]
┃│⋟ ${prefix}Eununca [Perguntas]
╰╦═════════════ ⪨
╭┤き⃟️🎳𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒🎳️⃟ き
┃│⋟ ${prefix}Pau 
┃│⋟ ${prefix}Gadometro
┃│⋟ ${prefix}Chifruda
┃│⋟ ${prefix}Safada
┃│⋟ ${prefix}Retardada
┃│⋟ ${prefix}Vagabunda
┃│⋟ ${prefix}Maconheira
┃│⋟ ${prefix}Fria
┃│⋟ ${prefix}Santa
┃│⋟ ${prefix}Rica
┃│⋟ ${prefix}Fofoqueira
┃│⋟ ${prefix}Chifrudo
┃│⋟ ${prefix}Iludido
┃│⋟ ${prefix}Heterotop
┃│⋟ ${prefix}Safado
┃│⋟ ${prefix}Homofobico
┃│⋟ ${prefix}Calculista
┃│⋟ ${prefix}Kengo
┃│⋟ ${prefix}Toxico
┃│⋟ ${prefix}Retardado
┃│⋟ ${prefix}Punheteiro
┃│⋟ ${prefix}Vagabundo
┃│⋟ ${prefix}Maconheiro
┃│⋟ ${prefix}Santo
┃│⋟ ${prefix}Frio
┃│⋟ ${prefix}Pobre
┃│⋟ ${prefix}Rico
┃│⋟ ${prefix}Fofoqueiro
┃│⋟ ${prefix}Retardado
┃│⋟ ${prefix}Socafofo
┃│⋟ ${prefix}Socaforte 
┃│⋟ ${prefix}Chance [Texto]
┃│⋟ ${prefix}Casal [Aleatoriamente]
┃│⋟ ${prefix}Shipo [@Mencione]
┃│⋟ ${prefix}Alma-gemeas
┃│⋟ ${prefix}Duelo [@/@/Minuto]
┃│⋟ ${prefix}Gay [@Mencione]
┃│⋟ ${prefix}Feio [@Mencione]
┃│⋟ ${prefix}Matar [@Mencione]
┃│⋟ ${prefix}Vesgo [@Mencione]
┃│⋟ ${prefix}Bebado [@Mencione]
┃│⋟ ${prefix}Gado [@Mencione]
┃│⋟ ${prefix}Gostoso [@Mencione]
┃│⋟ ${prefix}Gostosa [@Mencione]
┃│⋟ ${prefix}Beijo [@Mencione]
┃│⋟ ${prefix}Tapa [@Mencione]
┃│⋟ ${prefix}Chutar [@Mencione]
┃│⋟ ${prefix}Dogolpe [@Mencione]
┃│⋟ ${prefix}Amongus [@Mencione]
┃│⋟ ${prefix}Nazista [@Mencione]
╰╦═════════════ ⪨
╭┤き⃟️🏆𝐂𝐌𝐃𝐒-𝐑𝐀𝐍𝐊𝐒🏆️⃟ き
┃│⋟ ${prefix}Rankgay
┃│⋟ ${prefix}Rankgado
┃│⋟ ${prefix}Rankcorno
┃│⋟ ${prefix}Rankgostosos
┃│⋟ ${prefix}Rankgostosas
┃│⋟ ${prefix}Ranknazista
┃│⋟ ${prefix}Rankotakus
┃│⋟ ${prefix}Rankpau
┃│⋟ ${prefix}Rankativo
┃╰══ ⪨
╰═════════════ ⪨`
}

exports.brincadeiras = brincadeiras

// ALTERADORES DE AUDIO E VIDEO
const alteradores = (prefix) => {
  
  return `╭══════════════ ⪩
╰╮き⃟🎧𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑-𝐀𝐔𝐃🎧⃟ き
╭┤⋟ ${prefix}Bass [Marcar]
┃│⋟ ${prefix}Blown [Marcar]
┃│⋟ ${prefix}Deep [Marcar]
┃│⋟ ${prefix}Earrape [Marcar]
┃│⋟ ${prefix}Fast [Marcar]
┃│⋟ ${prefix}Fat [Marcar]
┃│⋟ ${prefix}Nightcore [Marcar]
┃│⋟ ${prefix}Reverse [Marcar]
┃│⋟ ${prefix}Robot [Marcar]
┃│⋟ ${prefix}Slow [Marcar]
┃│⋟ ${prefix}Smooth [Marcar]
┃│⋟ ${prefix}Squirrel [Marcar]
┃│⋟ ${prefix}Sombrio [Marcar]
┃│⋟ ${prefix}Esquilo [Marcar]
┃│⋟ ${prefix}Vozmenino [Marcar]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟️📽️𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑-𝐕𝐈𝐃📽️⃟ き
┃│⋟ ${prefix}Videorapido [Marcar]
┃│⋟ ${prefix}Videocontrario [Marcar]
┃│⋟ ${prefix}Videolento [Marcar]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🗣️𝐃𝐔𝐁𝐋𝐀𝐆𝐄𝐌🗣⃟ き
┃│⋟ ${prefix}Faustao [Texto]
┃│⋟ ${prefix}Patolino [Texto]
┃│⋟ ${prefix}Chapolin [Texto]
┃│⋟ ${prefix}Eminem [Texto]
┃│⋟ ${prefix}Ibere [Texto]
┃╰══ ⪨
╰══════════════ ⪨`
}

exports.alteradores = alteradores

// MENU PARA ADMINS
const adms = (prefix) => {

  return `
╭══════════════ ⪩
╰╮き⃟🕵🏻𝐌𝐄𝐍𝐔-𝐀𝐃𝐌𝐈𝐍𝐒🕵🏻⃟ き
╭┤⋟ ${prefix}Tagall [Marcar tds]
┃│⋟ ${prefix}Marcar [Marcar tds]
┃│⋟ ${prefix}Resetaki [Akinator]
┃│⋟ ${prefix}Autofigu-gp [1/0]
┃│⋟ ${prefix}Hidetag [Marcar tds] 
┃│⋟ ${prefix}Notificar
┃│⋟ ${prefix}Criartabela [Texto] 
┃│⋟ ${prefix}Tabelagp
┃│⋟ ${prefix}Membros
┃│⋟ ${prefix}Checkativo [@]
┃│⋟ ${prefix}Atividades
┃│⋟ ${prefix}Enquete [Texto]
┃│⋟ ${prefix}Simih [1/0]
┃│⋟ ${prefix}Simih2 [1/0]
┃│⋟ ${prefix}Descgp
┃│⋟ ${prefix}Nomegp
┃│⋟ ${prefix}Mute [@]
┃│⋟ ${prefix}Desmute [@]
┃│⋟ ${prefix}Addprefixo-gp [Prefixo]
┃│⋟ ${prefix}Remprefixo-gp
┃│⋟ ${prefix}Ban
┃│⋟ ${prefix}Roletarussa
┃│⋟ ${prefix}Sairgp
┃│⋟ ${prefix}Reviver [@Mensagem]
┃│⋟ ${prefix}Bangp
┃│⋟ ${prefix}Unbangp
┃│⋟ ${prefix}Kick [@Marcar]
┃│⋟ ${prefix}Marcarwa [wa.me] 
┃│⋟ ${prefix}Sorteio [Texto]
┃│⋟ ${prefix}Sorteionumero [Texto]
┃│⋟ ${prefix}Add [Número]
┃│⋟ ${prefix}Msgtemp [Desativar/Ativar]
┃│⋟ ${prefix}Linkgp
┃│⋟ ${prefix}Tempo-gp [Tmp-fechar/Tmp-abrir]
┃│⋟ ${prefix}Promover [@Marcar]
┃│⋟ ${prefix}Rebaixar [@Marcar]
┃│⋟ ${prefix}Tirardalista
┃│⋟ ${prefix}Listanegra
┃│⋟ ${prefix}Listban
┃│⋟ ${prefix}Autoban
┃│⋟ ${prefix}Kickfake [Ban fakes]
┃│⋟ ${prefix}Banfake [Ban fakes]
┃╰══ ⪨
╰╦════════════ ⪨
╭┤き⃟🙅🏻𝐀𝐍𝐓𝐈𝐒/𝐅𝐔𝐍𝐂🙅🏻⃟ き
┃│⋟ ${prefix}Autofig-pv [1/0]
┃│⋟ ${prefix}Autofig-gp [1/0]
┃│⋟ ${prefix}Antidocumento [1/0]  
┃│⋟ ${prefix}Antilinkhard [1/0]
┃│⋟ ${prefix}Antilink [1/0]
┃│⋟ ${prefix}Antiloc [1/0]  
┃│⋟ ${prefix}Anticontato [1/0]
┃│⋟ ${prefix}Antiviewone [1/0]
┃│⋟ ${prefix}Antiaudio [1/0]
┃│⋟ ${prefix}Antivideo [1/0]
┃│⋟ ${prefix}Antifake [1/0]
┃│⋟ ${prefix}Antiimg [1/0]
┃│⋟ ${prefix}AntiCatalogo [1/0]
┃│⋟ ${prefix}Antisticker [1/0]
┃│⋟ ${prefix}Nsfw [1/0]
┃│⋟ ${prefix}Leveling [1/0]
┃│⋟ ${prefix}Anagrama [1/0]
┃│⋟ ${prefix}Autoreação [1/0]
┃│⋟ ${prefix}Legendabv2
┃│⋟ ${prefix}Legendasaiu2
┃│⋟ ${prefix}Bemvindo2
┃╰══ ⪨
╰══════════════ ⪨`
}

exports.adms = adms

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`ATUALIZANDO O MENU `))
	delete require.cache[file]
	require(file)
})

