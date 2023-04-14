function chaluband(){
    document.querySelectorAll('input').forEach((e)=>{
        e.style.display='none'
    })
}

function fileopen(e){
    chaluband()
    document.querySelector('.file').style.display='flex'
}

function folderopen(e){
    chaluband()
    document.querySelector('.folder').style.display='flex'
}

window.addEventListener('keydown',(e)=>{
    if(e.keyCode===27){
        document.querySelectorAll('input').forEach((e)=>{
            e.style.display='none'
        })
    }
})


