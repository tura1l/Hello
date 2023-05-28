let url = 'https://6473a086d784bccb4a3cca0f.mockapi.io/Regions/'+window.location.search.substring(1)
if (window.location.search.substring(1) == '') {
    window.location.href = "regions.html"
}
fetch(url)
.then(res=>{
    if(res.ok){
        return res.json();
    }
    else{
        window.location.href = "regions.html"
    }
}).then(data=>{
            document.querySelector('#name').value = data.name;
            document.querySelector('#picture').value = data.picture;
            document.querySelector('#villageCount').value = data.villageCount;
}).catch(err=>console.log(err))
const btn = document.querySelector('.btn-info');
btn.addEventListener('click', function(){
        fetch(url,{
            method:'PUT',
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
                window.location.href = "regions.html"
            }
            else{
                errorAlert('Bir xəta baş verdi!')
            }
        }).catch(()=>errorAlert('Bir xəta baş verdi!'))
})
