/* Calcular a variação da tela scale do usuario - util apra redimensionar depois */
window.onresize = function() {
    var size = getClientSize();
    console.log("Width: " + size.width + ", Height: " + size.height);
}

function getClientSize() {
  var width = 0, height = 0;

  if(typeof(window.innerWidth) == 'number') {
        width = window.innerWidth;
        height = window.innerHeight;
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
  }

  return {width: width, height: height};
}
//-------------

$(document).ready(function() {    
        setTimeout(function() {
            $('#loadPage1').css("background-color", "green");
        }, 1000);
            setTimeout(function() {
            $('#loadPage2').css("background-color", "green");
        }, 2000);
            setTimeout(function() {
            $('#loadPage3').css("background-color", "green");
        }, 3000);
                setTimeout(function() {
             pageLoaded();
        }, 3500);
    
});

function pageLoaded(){
    $( ".loadPage" ).animate({
    //opacity: 0.35,
    //left: "+=50",
    height: "toggle",
    opacity: "toggle"
  }, 1500, "linear", function() {
    // Iniciar a pagina do game
        $( ".loadPage" ).css("display","none")
        //$( this ).after( "<div>Animation complete.</div>" );
  });
}
