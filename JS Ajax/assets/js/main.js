for (let i = 1; i < 13; i++) {

$.ajax({
    method:"GET",
    url : 'https://api.tvmaze.com/shows/'+i,
    success: function(res){
        console.log(res);
             $('.row').append(`<div class="col-3 mb-5">
             <div class="card" style="width: 18rem;">
                 <img  src="${res.image.medium}" class="card-img-top w-100" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${res.name}</h5>
                   <p class="card-text"><b>Ratings: ${res.rating.average}</b></p>
                 </div>
                 <div class="card-body">
                     <a href='details.html?id=${res.id}' target='_blank' class="btn btn-primary">Details</a>
                 </div>
               </div>
         </div>`)
    },
    error: function(err){
        console.log(err);
    }
})
}