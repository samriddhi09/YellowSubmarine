
$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      
      $( ".inner-switch" ).removeClass( "fas fa-cloud-moon" );
      $( ".inner-switch" ).addClass( "fas fa-sun" ).css('color','#f09713');

    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).removeClass( "fas fa-sun" );
      $( ".inner-switch" ).addClass( "fas fa-cloud-moon" ).css('color', '#ffffff');;
      $( ".inner-switch" ).text( "" );
      $( "parallax" ).css('background-color','rgba(0,0,0,0.1)');

    }
});
  var totalamount= 9999 ;          
$("#formCheck-1").click(function() {
   
   if ($(this).is(':checked')) {
       totalamount += 500;
               
   }
   else{
       totalamount -= 500;
   }
   $('#adi').html("&#9875;" +totalamount);
});
$("#formCheck-2").click(function() {
   if ($(this).is(':checked')) {
       totalamount += 700;
       }
       else{
       totalamount -= 700;
           }
           $('#adi').html("&#9875;" +totalamount);                    
   });
$("#formCheck-3").click(function() {
   if ($(this).is(':checked')) {
       totalamount += 600;  
    }  
   else{
       totalamount -= 600;
   }
   $('#adi').html("&#9875;" +totalamount);                        
   });

$(".btn").click(function() {
    $('.bill').html("&#9875;" +totalamount);
    $('.bill1').html("&#9875;" +totalamount1);
});

var counter=0,totalamount1=0;

var m1=0,m2=0,m3=0,n1=0,n2=0,n3=0;
$(".btn").click(function() {
     if ($("#formCheck-1").is(':checked')) {
      $(".module1").html("Docking Bay Repair");
      $(".m1price").html("&#9875;500");
      m1=1;
              }          
});              
$(".btn").click(function() {
     if ($("#formCheck-2").is(':checked')) {
      $(".module2").html("Fire Suppression System");
      $(".m2price").html("&#9875;700");
      m2=1;
              }
}); 
 $(".btn").click(function() {
     if ($("#formCheck-3").is(':checked')) {
      $(".module3").html("Shield Generator");
      $(".m3price").html("&#9875;600");
      m3=1;
              }
});
$(".btn").click(function() {
if(counter<1){
    window.location.href='#popup1';
   counter++
   totalamount1=totalamount;
   n1=m1;
   n2=m2;
   n3=m3;
}
else{
    window.location.href='#popup2';

}
});  
$(".btn").click(function() {
  if(n1==1){
    $(".module11").html("Docking Bay Repair");
      $(".m11price").html("&#9875;500");
  }
});   
$(".btn").click(function() {
  if(n2==1){
      $(".module12").html("Fire Suppression System");
      $(".m12price").html("&#9875;700");
  }
});   
$(".btn").click(function() {
  if(n3==1){
      $(".module13").html("Shield Generator");
      $(".m13price").html("&#9875;600");
  }
});