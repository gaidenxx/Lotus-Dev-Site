var numButtons = 4;
var numGameSession = 3; //por enquanto ele será estatico porem sera indefinido com busca json dos jogos upload
textButtons = ["Destaque",
              "Documentação",
               "Sobre nós",
                "Sem Tema"];


imagesMenu = ["initialscreen",
             "initialscreen"];

var count = 0;
 var listImages = imagesMenu.length;
                      

$(function(){
    for(i=0; i < numButtons; i++){
        
        $("div.leftMenu").append('<div class="buttonsLeft" onmouseover="overButton('+ i +')" onmouseout="outButton('+ i +')" onclick="button('+ i +')" id="button'+ i +'"><label id="block'+ i +'"><u>'+textButtons[i]+'</u></label></div>');
  }
});

function overButton(numberButton){
          $('#button' + numberButton).css("background-color", "#080915");
             $('#block' + numberButton).css("opacity", "1");
}

function outButton(numberButton){
          $('#button' + numberButton).css("background-color", "" + ($(".leftMenu").css('background-color')));
             $('#block' + numberButton).css("opacity", "0.8");
   
}

function button(numberButton){
    $('.buttonsLeft').find('.arrow-left').remove();
      $('#button' + numberButton).append('<div class="arrow-left"></div>');
}


$(document).ready(function(){
    for(i=0; i < imagesMenu.length; i++){
        $("#slide").append('<img src="imagens/bannerGame/' + imagesMenu[i] + '.jpg" alt="Imagem das Ilhas">');
    }
    
    $("#slide img:eq(0)").addClass("ativo").show();
        var texto = $(".ativo").attr("alt");
            $("#slide").prepend("<p>" + texto + "</p>");
                console.log("Imagens da lista" + listImages);
                    setInterval(slide,10000);
});

function slide(){
    if((count + 2) <= listImages){
	   if($(".ativo").next()){ //.size()
            console.log("acessou funcao");
                count ++;
                    console.log("Imagens percorridas: " + count);
                $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
                    var texto = $(".ativo").attr("alt");
                        $("#slide p").hide().html(texto).delay(500).fadeIn();
    }
        }   else {
        count = 0;
            console.log("Resetou");
        $(".ativo").fadeOut().removeClass("ativo");
		$("#slide img:eq(0)").fadeIn().addClass("ativo");
		//se não, irá retornar ao estado inicial do slide
}
}



$("#linkMenu").click(function(){
    alert("Redirecionar a outra pagina");
});

// Game Panel Content

$(function(){
    for(x=0; x < numGameSession; x++){
        $("#gameLocal").append('<div class="gameSession" id="game'+x+'" onmouseover="overGameSel('+x+')" onmouseout="outGameSel('+x+')">'+
                                  '<div class="gameIcons"><a id="none" href="gamespage.html"><img src="imagens/iconeGame/Icon1024.jpg" alt="void" height="150px" width="150px"></a></div>'+
                                  '<div class="gameDescription"><a id="none2" href="gamespage.html">Title </a><p>Example game description.</p></div>'+
                                  '</div>');
  }
});

function overGameSel(idGame){
    $('#game' + idGame).css("box-shadow","0px 0px 10px 0px rgba(29,0,145,1)");

}

function outGameSel(idGame){
     $('#game' + idGame).css("box-shadow","0px 0px 10px 0px rgba(153,153,153,1)");
}