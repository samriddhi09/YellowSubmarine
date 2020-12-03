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
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    if(input.value.length == 0){
        ul.style.display = "none";
        return;
    }else{
        ul.style.display = "block";
    }
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(document).ready(function(){


// Scroll Up Button

$(window).scroll(function()
{
    var scrolltop=$(this).scrollTop();
    if(scrolltop>=500)
    {
        $('#arrow img').show();
    }
    else { $('#arrow img').hide();
    }
    });
    $('#arrow img').click(function()
    {
        $("html,body").animate({scrollTop: 0}, 1000);
    });


});