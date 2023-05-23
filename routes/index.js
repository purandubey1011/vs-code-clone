var express = require('express');
var router = express.Router();
let fs = require('fs')

/* GET home page. */
router.get('/', function(req, res) {
  let fileDuplicate = []
  fs.readdir('./file',{withFileTypes:true},(err,data)=>{
    // console.log(data[0].isFile())
    data.forEach((dirent)=>{
      fileDuplicate.push({name:dirent.name,isFolder:dirent.isDirectory()})
    })
    // console.log(fileDuplicate)
    res.render('index',{fileDuplicate});
  })

});

router.get('/createFile',(req,res)=>{
  fs.writeFile(`./file/${req.query.file}`,'',(err)=>{
    if(err){
      console.log(err)
    }else{
      res.redirect('/')
    }
  })
})

router.get('/createFolder',(req,res)=>{
  fs.mkdir(`./file/${req.query.file}`,(err)=>{
    if(err){
      console.log(err)
    }else{
      res.redirect('/')
    }
  })
})

// router.get('/files/:filename',async (req,res)=>{
//     fs.readFile(`./file/${req.params.filename}`,'utf8',(err,data)=>{
//       // if(err)console.log(err)
//       // console.log(`./file/${req.params.filename}`)
//       console.log({data})
//       res.send({data})
//     })
// })

router.get('/files/:filename',async (req,res)=>{
  let fileDuplicate = []
  fs.readdir('./file',{withFileTypes:true},(err,data)=>{
    // console.log(data[0].isFile())
    data.forEach((dirent)=>{
      fileDuplicate.push({name:dirent.name,isFolder:dirent.isDirectory()})
    })
    // console.log(fileDuplicate)
    console.log(fileDuplicate)
    console.log(fileDuplicate.indexOf(req.params.filename))
  })
  
  fs.readFile(`./file/${req.params.filename}`,'utf8',(err,data)=>{
    res.render('fileopened',{fileDuplicate, filename:req.params.filename,filedata:data});
  })
})

// router.get('')

module.exports = router;



