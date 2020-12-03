
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
  var totalamount= 6999 ;          
$("#formCheck-1").click(function() {
   
   if ($(this).is(':checked')) {
       totalamount += 350;
               
   }
   else{
       totalamount -= 350;
   }
   $('#adi').html(": &#9875;" +totalamount);
});
$("#formCheck-2").click(function() {
   if ($(this).is(':checked')) {
       totalamount += 200;
       }
       else{
       totalamount -= 200;
           }
           $('#adi').html(": &#9875;" +totalamount);                    
   });
$("#formCheck-3").click(function() {
   if ($(this).is(':checked')) {
       totalamount += 550;  
    }  
   else{
       totalamount -= 550;
   }
   $('#adi').html(": &#9875;" +totalamount);                        
   });

$(".btn").click(function() {
    $('.bill').html("&#9875;" +totalamount);
    $('.bill1').html("&#9875;" +totalamount1);
});

var counter=0,totalamount1=0;

var m1=0,m2=0,m3=0,n1=0,n2=0,n3=0;
$(".btn").click(function() {
     if ($("#formCheck-1").is(':checked')) {
      $(".module1").html("Propulsion Cannon Arm");
      $(".m1price").html("&#9875;350");
      m1=1;
              }          
});              
$(".btn").click(function() {
     if ($("#formCheck-2").is(':checked')) {
      $(".module2").html("Jump Jet Upgrade");
      $(".m2price").html("&#9875;200");
      m2=1;
              }
}); 
 $(".btn").click(function() {
     if ($("#formCheck-3").is(':checked')) {
      $(".module3").html("Grappling Arm");
      $(".m3price").html("&#9875;550");
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
    $(".module11").html("Propulsion Cannon Arm");
      $(".m11price").html("&#9875;350");
  }
});   
$(".btn").click(function() {
  if(n2==1){
      $(".module12").html("Jump Jet Upgrade");
      $(".m12price").html("&#9875;200");
  }
});   
$(".btn").click(function() {
  if(n3==1){
      $(".module13").html("Grappling Arm");
      $(".m13price").html("&#9875;550");
  }
});