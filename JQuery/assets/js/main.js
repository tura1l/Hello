const words=[];
$("#add").click(function () {
  var word = $("#addWord").val();
  words.push(word);
  $("#lists").append(`<li>${word}</li>`)
  $("#addWord").val("");
})
window.addEventListener("keypress", function (e) {
  if (e.keyCode==13) {
    var word = $("#addWord").val();
    words.push(word);
    $("#lists").append(`<li>${word}</li>`)
    $("#addWord").val("");
  }
})

$("#searchWord").keyup(function(){
  var searWord=$("#searchWord").val()
  var inspectList=words.filter(function (word) {
    return word.toLowerCase().includes(searWord.toLowerCase())
  })
  $("#lists").empty();
        inspectList.forEach(function(word) {
          $("#lists").append(`<li>${word}</li>`);
        });
})

//Hocam vallah coxdan yazmisdim sadece basim qarisiq oldu 12 tamami gormemisem ona gore gecikdi