const fs = require('fs');
const votacao = JSON.parse(fs.readFileSync('./database/votacao/votacao.json'))

const sleep = async (ms) => {
return new Promise(
resolve => setTimeout(resolve ,  ms)
)
}

const delVoto = (ID) => {
pesquisar = ID
processo = votacao.indexOf(pesquisar)
while(processo >= 0) {
votacao.splice(processo ,  1)
processo = votacao.indexOf(pesquisar)
}
fs.writeFileSync(`./database/votacao/votacao.json` ,  JSON.stringify(votacao))
fs.unlinkSync(`./database/votacao/votos/${ID}.json`)
fs.unlinkSync(`./database/votacao/P_votos/${ID}.json`)
}

const addVoto = async(ID , _valor1 , _valor2 , _valor3 , reply) => {
votacao.push(ID)
fs.writeFileSync(`./database/votacao/P_votos/${ID}.json` , '[]')
fs.writeFileSync(`./database/votacao/votos/${ID}.json` , '[]')
fs.writeFileSync('./database/votacao/votacao.json' ,  JSON.stringify(votacao))
await sleep(2000)
let votos = JSON.parse(fs.readFileSync(`./database/votacao/votos/${ID}.json`))
votos.push({
razao: _valor1 ? _valor1 : '-' ,
votos: _valor2.trim() + '@s.whatsapp.net' ,
duracao: _valor3
})
fs.writeFileSync(`./database/votacao/votos/${ID}.json` ,  JSON.stringify(votos))
setTimeout( async function() {
voto = JSON.parse(fs.readFileSync(`./database/votacao/P_votos/${ID}.json`))
let verdade = voto.filter(dds => dds.votacao == '✅')
let falso = voto.filter(dds => dds.votacao == '❌')
reply(`Votação encerrada.\n\nTotal de ✅:  ${verdade.length}.\nTotal de ❌:  ${falso.length}`)
fs.unlinkSync(`./database/votacao/votos/${ID}.json`)
fs.unlinkSync(`./database/votacao/P_votos/${ID}.json`)
fs.writeFileSync(`./database/votacao/votacao.json` ,  JSON.stringify(votacao))
},
_valor3 * 60 * 1000)
}

module.exports = {
delVoto ,
addVoto
}
