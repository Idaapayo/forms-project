$(document).ready(function(){
  $("#car form").submit(function(event) {
         var car1Input = $("input#car1").val();
         var car2Input = $("input#car2").val();
         var car3Input= $("input#car3").val();
         var car4Input = $("input#car4").val();
         var car5Input = $("input#car5").val();
         var car6Input = $("input#car6").val();

         event.preventDefault();
  var car = [car1Input, car2Input, car3Input, car4Input, car5Input, car6Input]
  console.log(car);
  });
});
