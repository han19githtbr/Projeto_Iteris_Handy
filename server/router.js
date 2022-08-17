const express = require('express')

const router= express.Router()

const conn= require('./database/db')



// selecionar item
router.get('/pokemons', function (req, res){
    conn.query('SELECT * FROM tb_pokemon ORDER BY id DESC', (error, result)=>{
        if(error){
            throw error;
        }else{
           
        res.send(result)

        }
    })
})


router.get('/',(req,res)=>{
    res.render('index')
})


// selecionar uma carta pelo nome
router.get('/pokemon/:name', (req, res) => {

    const name = req.params.name

    conn.query('SELECT * FROM tb_pokemon WHERE name=?', [name], (error, result) => {

        if (error) {
            throw error
        } else {
            res.json(result)

        }
    })

})



// selecionar 1 item

router.get('/pokemon/:id',(req, res)=>{
      
        const id= req.params.id

        conn.query('SELECT * FROM tb_pokemon WHERE id=?',[id],(error, result)=>{
      
        if(error){
            throw error
        }else{
            res.json(result)
           
        }
    })

})



// excluir uma carta pelo id
router.delete('/delete-action/:id',(req,res)=>{
    const id= req.params.id
    console.log(id)
    conn.query('DELETE FROM tb_pokemon WHERE id=?',[id],(error, result)=>{
        
    if(error){
        throw error
        }else{
          //res.redirect('/')
          res.json(result)  
        }})
  
})




// cadastrar uma carta
router.get('/add',(req, res)=>{
    res.render('add')
})


// enviar uma carta para o banco de dados
router.post('/add',(req, res)=>{
   
    const {name}= req.body
    const {hp}= req.body
    const {attack}= req.body
    const {defense}= req.body
    const {speed}= req.body
    const {special_attack}= req.body
    const {special_defense}= req.body


    conn.query('INSERT INTO tb_pokemon SET?', { name: name, hp: hp, attack: attack, defense: defense, speed: speed, special_attack: special_attack, special_defense: special_defense },(error, result)=>{
      if(error){
        throw error
      }else{
     

        res.json(result)
      }
  })


})


// resultado da comparação de duas cartas
router.post('/result', (req, res) => {

    const { pokemon1 } = req.body
    const { pokemon2 } = req.body
    const { result } = req.body

    conn.query('INSERT INTO result SET?', { pokemon1: pokemon1, pokemon2: pokemon2, result: result }, (error, result) => {
        if (error) {
            throw error
        } else {

            res.json(result)
        }
    })

})


// atualizar todos os atributos de uma carta
router.post('/edit-action/:id', (req, res)=>{
    const id= req.params.id
    const {name}= req.body
    const {hp}= req.body
    const {attack}= req.body
    const {defense}= req.body
    const {speed}= req.body
    const {special_attack}= req.body
    const {special_defense}= req.body
 

    conn.query('UPDATE tb_pokemon SET? WHERE id = ?', [{ name: name, hp: hp, attack: attack, defense: defense, speed: speed, special_attack: special_attack, special_defense: special_defense }, id], (error, result) => {
        if (error) {
            throw error
        } else {
            //    res.redirect('/')
            res.send(result[0])
            // res.send(result)
           

        }
    })

})


// atualizar um determinado atributo de uma carta
router.patch('/edit-action/:id',(req, res, next)=>{
      
    const id= req.params.id
    
    conn.query(`UPDATE tb_pokemon SET attack = 50, defense = 50  WHERE id = ${id}`,
   
    function(error, result){
         if(error){
            res.status(400).json({"error":error.message})
            return;
         }
         res.json(result)

         //res.render('edit',{user:result[0]})
     })
})



module.exports= router;