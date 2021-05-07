$(document).ready(function() {
  $("form#pig-latin").submit(function (event) {
    
    let pigText = $("#pig-text").val();
   
    let piggy = pigLatin(pigText)

    $("#piggy-word").html(piggy)
    event.preventDefault();
  });
});

