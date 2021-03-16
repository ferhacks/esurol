//jangan ubah om plisss
//om jangan ambil
//yah om
const sleep = async (ms) => { // Função parecida com a de shell usada pra esperar certo tempo antes de rodar algo, usa sistema de milisegundos
      return new Promise(resolve => setTimeout(resolve, ms));
  }

const bienvenida = 'Que tal!, Bienvenid@ A la Ciudad Astrag, Un grupo hecho Aiden, Este grupo es un poco diferente de todos por que bueno, me tienen a mi..'
const explicacion = 'Bueno, Este grupo de rol Es libre, Y esta basado en el servidor de discord llamado, "Kezolandia", Pero esa es otra historia,'
const Ficha = 'En breve, Te enviare la ficha.. *-La busca-* uhh.. No la encuentro.. Esperame 20 segundos.. *-se va a la bobeda a buscar la ficha-*'
const fichas = `┏━━━━━━━━━━━━━━━━┓

Venga bags Te dije que no soy Bueno hablando.. -Aiden

┗━━━━━━━━━━━━━━━━┛


▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀

┌▸ ❖ ┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅ ❖ ◂┐

Nombre y apellido

﹣"Aquí ustedes colocarán su nombre,

debe ser uno digno del Salvador de su mundo,

veamos que tiene que ofrecer".

Edad

﹣"Tu edad en este apartado no tiene límites, al menos no como lo han tenido tus abuelos (Puedes tener cualquier edad, preferiblemente de 12 años para adelante)".

Nacionalidad

﹣"Debes de venir de algún lugar genial, en esta época todos los países existen en paz, puedes venir de donde quieras".

Género

﹣"Tenemos que saber si eras hombre o mujer".

Arma

﹣"(Podras ser el mismisimo Justiciero de las noticias..?)".

Historia

﹣"Disfrutaremos de la historia de tu nieto, esperemos que sea genial, humano".

Herramienta mágica

﹣"Es tan fácil poseer una herramienta, aunque es algo difícil usarla, veamos que tan bien te desempeñas".

La pérdida de tutor legal

﹣"Debes tener un lindo tema para decir cuando estés en el orfanato, aquí será la perdida de tu tutor legal y nada más".


└▸ ❖ ┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅ ❖ ◂┘

▄▀▄▀▄▀▄▀▄▀▄▀▄▀▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀

┏━━━━━━━━━━━━━━━━┓

－ "Seamos honestos, Este archivo Para ti, Debe ser algo muy importate, Para nosotros los habitantes de Ciudad Astrag".

┗━━━━━━━━━━━━━━━━┛

`

let { Presence, MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, text}) => {
      conn.reply(m.chat, 'Se te enviara al privado las instrucciones', m)
      conn.updatePresence(m.sender, Presence.composing)
      await sleep(5000)
      await conn.reply(m.sender, bienvenida, m)
      await conn.updatePresence(m.sender, Presence.available)
      await sleep(10000)
      await conn.updatePresence(m.sender, Presence.composing)
      await sleep(10000)
      conn.sendMessage(m.sender, explicacion, MessageType.extendedText)
      await conn.updatePresence(m.sender, Presence.available)
      await sleep(5000)
      await conn.updatePresence(m.sender, Presence.composing)
      await sleep (10000)
      conn.sendMessage(m.sender, Ficha, MessageType.extendedText)
      await conn.updatePresence(m.sender, Presence.unavailable)
      await sleep (20000)
      await conn.updatePresence(m.sender, Presence.composing)
      await sleep (5000)
      await conn.updatePresence(m.sender, Presence.available)
      conn.sendMessage(m.sender, 'En fin Ya lo encontre.. -*se lo da*-', MessageType.extendedText)
      await conn.sendMessage(m.sender, fichas, MessageType.extendedText)
      await conn.updatePresence(m.sender, Presence.composing)
      await sleep (5000)
      await conn.updatePresence(m.sender, Presence.available)
      await conn.sendMessage(m.sender, 'Una vez que lo llenes, Tienes que poner "/vef tu ficha", Luego envia la imagen y respondela con "/vefimg"', MessageType.extendedText)
      await conn.sendMessage(m.sender, 'Y Pon la privacidad de grupos en "Todos", O añade al bot sin ponerlo en "la lista de exepciones", De lo contrario, No podras entrar al grupo, Eso es todo, Te esperamos :)', MessageType.extendedText)
}
handler.help = ['apkmod']
handler.tags = ['tools']
handler.group = true
handler.command = /^verificar$/i

module.exports = handler
