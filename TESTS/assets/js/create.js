const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    fetch('https://6473a086d784bccb4a3cca0f.mockapi.io/Regions',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            picture : document.querySelector('#picture').value,
            villageCount : document.querySelector('#villageCount').value
        })
    }).then(res=>{
        if(res.ok){
           succes("Tebrikler!Isteyiniz qeyde alindi.");
            document.querySelector('#name').value = '';
            document.querySelector('#picture').value = '';
            document.querySelector('#villageCount').value = '';
        }
        else{
            error("Oppps!Nese problem var.")
        }
    }).catch(err=>error("System EROR"))
})