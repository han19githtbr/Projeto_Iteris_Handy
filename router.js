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



// selecionar item

router.get('/', function (req, res){
    conn.query('SELECT * FROM tb_pokemon2 ORDER BY id DESC', (error, result)=>{
        if(error){
            throw error;
        }else{
        //exibe o resultado em uma tabela no navegador
        //res.render('index', {resultado: result})
        //exibe o resultado em formato de json no navegador 
        res.json(result)   
        
        //    res.send(result)

        }
    })
})




// selecionar 1 item

/* router.get('/:id',(req, res)=>{
      
        const id= req.params.id

        conn.query('SELECT * FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{
      
         if(error){
             throw error
         }else{
             res.json(result)
           
         }
     })

 })*/



// router.get('*', function(req, res){
//   res.send('pagina não encontrado', 404);
// });






// excluir item



router.get('/delete-action/:id',(req,res)=>{
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




// adicionar item
router.get('/add',(req, res)=>{
    res.render('add')
})



router.post('/add-action', upload.single('upload'),(req, res)=>{
    const file= req.file.filename
    const {name}= req.body
    const {hp}= req.body
    const {attack}= req.body
    const {defense}= req.body
    const {speed}= req.body
    const {special_attack}= req.body
    const {special_defense}= req.body

    let atributo= { "hp": hp, "attack": attack,"defense": defense, "speed": speed,"special_attack": special_attack,"special_defense":special_defense }
    atributo= JSON.stringify(atributo)
    
    conn.query('INSERT INTO tb_pokemon2 SET?',{ file: file,name: name, atributo: atributo },(error, result)=>{
      if(error){
        throw error
      }else{
          res.redirect('/')
      }
  })

  
})


// editar item
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





router.post('/edit-action', upload.single('upload'), (req, res)=>{
    const id= req.body.id
     //const file= req.file.filename
     const {name}= req.body
    const {hp}= req.body
    const {attack}= req.body
    const {defense}= req.body
    const {speed}= req.body
    const {special_attack}= req.body
    const {special_defense}= req.body



     if(req.file == undefined){
       
        conn.query('SELECT * FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{
            const old = result[0].file     
        conn.query('UPDATE tb_pokemon2 SET? WHERE id = ?',[{file: old,name: name, hp: hp, attack: attack,defense: defense, speed: speed,special_attack: special_attack,special_defense:special_defense}, id],(error, result)=>{
            if(error){
                throw error
          }else{
           res.redirect('/')
        //  res.send(result[0])
        //  res.send(result)
            
         }
         })
        })

     }else{
         const file= req.file.filename

        conn.query('SELECT file FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{
            const oldImage = result[0].file

            conn.query('DELETE file FROM tb_pokemon2 WHERE id=?',[id],(error, result)=>{

               fs.unlink('upload/'+oldImage,(err)=>{
                   if(err){
                       console.log(err)
                   }else{
                       conn.query('UPDATE tb_pokemon2 SET? WHERE id = ?',[{file: file,name: name, hp: hp, attack: attack,defense: defense, speed: speed,special_attack: special_attack,special_defense:special_defense}, id],(error, result)=>{
                         if(error){
                            throw error
                       }else{
                      res.redirect('/')
                        //  res.send(result)
                       
                      }
                      })
                   }
               })

            })

          
                
            })
     }


})










module.exports= router;