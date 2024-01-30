const { Router } = require ("express")

const router = Router()

router.get('/', (req, res) =>{
    res.send("olá gabriel")
})

router.post ('/',(req, res) => {
    res.send ('Voce fez uma requisiçao do tipo POST')
})

router.patch ('/',(req, res) => {
    res.send ('Voce fez uma requisiçao do tipo PATCH')
})

router.delete ('/',(req, res) => {
    res.send ('Voce fez uma requisiçao do tipo DELETE')
})

module.exports = router