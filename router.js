const express = require('express')

const router= express.Router()

const conn= require('./database/db')

const path = require('path')

const multer = require('multer')

const fs = require('fs')

const storage= multer.diskStorage({
    destination : function (req, file,cb){
        cb(null,'upload/')
    },
    filename: function (req, file, cb){
        
        cb(null, file.originalname + Date.now() + path.extname(file.originalname))
    }

})



const fileFilter =(req, file, cb) => {
  
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
        return cb(new Error('File must be of type JPG, JPEG,webp or PNG and nore more than 2MB in size'))
    }
   
    cb(undefined, true)
  }



  const upload = multer({
    storage: storage,
   
    fileFilter: fileFilter
    
  })



// Listar todas as cartas armazenadas na tabela do Banco de Dados
router.get('/', function (req, res){
    conn.query('SELECT * FROM tb_pokemon2 ORDER BY id DESC', (error, result)=>{
        if(error){
            throw error;
        }else{
        //exibe o resultado em uma tabela no navegador
        //res.render('index', {resultado: result})
        //exibe o resultado em formato de json no navegador 
        res.json(result)   
        
        //res.send(result)

        }
    })
})

// router.get('*', function(req, res){
//   res.send('pagina não encontrado', 404);
// });

// excluir uma carta na tabela
router.delete('/delete-action/:id',(req,res)=>{
    const id= req.params.id
    console.log(id)

    conn.query('SELECT file FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{
             const oldImage = result[0].file

             conn.query('DELETE FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{

                fs.unlink('upload/'+oldImage,(err)=>{
                    if(error){
                        throw error
                    }else{
                       conn.query('DELETE FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{
        
                    if(error){
                    throw error
                   }else{
                    res.redirect('/')
                 }
                 })

                    }
                })

             })

           
                 
             })
   
})



//cadastrar uma carta
router.get('/add',(req, res)=>{
    res.render('add')
})


// enviar uma carta no Banco de Dados
router.post('/add-action', upload.single('upload'), (req, res)=>{
    const file= req.file.filename
    const {name}= req.body
    const {hp}= req.body
    const {attack}= req.body
    const {defense}= req.body
    const {speed}= req.body
    const {special_attack}= req.body
    const {special_defense}= req.body

    //let atributo= { "hp": hp, "attack": attack,"defense": defense, "speed": speed,"special_attack": special_attack,"special_defense":special_defense }
    //atributo= JSON.stringify(atributo)
    
    conn.query('INSERT INTO tb_pokemon2 SET?',{ file: file, name: name, hp: hp, attack: attack, defense: defense, speed: speed, special_attack: special_attack, special_defense: special_defense },(error, result)=>{
      if(error){
        throw error
      }else{
          res.redirect('/')
        //res.json(result)
      }
  })
  
})


// atualizar os atributos de uma determinada carta
router.patch('/edit-action/:id',(req, res, next)=>{
      
    const id= req.params.id
    
    conn.query(`UPDATE tb_pokemon2 SET attack= 10, defense = 10  WHERE id = ${id}`,
   
    function(err, result){
         if(err){
            res.status(400).json({"error":err.message})
            return;
         }
         res.json(result)

         //res.render('edit',{user:result[0]})
     })
})




// Filtar a lista de cartas e retornar uma carta específica
router.get('/edit-action/:id',(req, res)=>{
      
    const id= req.params.id
    
    conn.query('SELECT * FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{
   
     if(error){
         throw error
     }else{

          res.json(result)

         //res.render('edit',{user:result[0]})
     }
 })

})



// Comparar duas cartas pelo id de cada uma. Se o playerOne tem o maior numero de atributos vencedores, 
router.post('/comparacao/:id', (req, res)=>{
    //const file= req.file.filename
    //const {name}= req.body
    const {hp}= req.body
    const {attack}= req.body
    const {defense}= req.body
    const {speed}= req.body
    const {special_attack}= req.body
    const {special_defense}= req.body
    
    
    let playerOne  = req.body
    let playerTwo  = req.body

    if (playerOne.atributo > playerTwo.atributo) {
        playerOne.id = id_winner 
    } else {
        playerTwo.id = id_looser
    }
        
    let atributo = { "hp": hp, "attack": attack,"defense": defense, "speed": speed,"special_attack": special_attack,"special_defense":special_defense }
    atributo = JSON.stringify(atributo)
    
    conn.query('SELECT * FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{ 

        const id = req.params.id
        
        conn.query('INSERT * INTO resultado_pokemon WHERE id=?',[id], { id_winner: id_winner, id_looser: id_looser, atributo: atributo }, (error, result)=> {
      
        if(error){
            throw error
                     
                
        res.redirect('/')
        }
    
        })  
    })

  
})


module.exports= router;