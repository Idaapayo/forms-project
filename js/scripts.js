$(document).ready(function(){
  $("#car form").submit(function(event) {
         var car1Input = $("input#person1").val();
         console.log(car1Input);
         var car2Input = $("input#person2").val();
         var car3Input= $("input#animal").val();
         var car4Input = $("input#exclamation").val();
         var car5Input = $("input#verb").val();
         var car6Input = $("input#noun").val();

  var car = [car1, car2, car3, car4, car5, car6]
  console.log(car);
  event.preventdefault();
  });
});
