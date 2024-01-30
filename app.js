const express = require("express")
const rotalivro = require("./rotas/curso")

const app = express()

app.use('/curso', rotalivro)

const port = 8000

app.get('/', (req, res) =>{
    res.send("olá gabriel")
})

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})


