window.focus();   
var mytat = new tiltandtap({
  tiltLeft :  {callback:gesto('inclinarEsquerda')}, //volume-
  tiltRight : {callback:gesto('inclinarDireita')}, //volume+
  tiltUp :    {callback:gesto('inclinarTras')}, //play
  tiltDown:   {callback:gesto('inclinarFrente')}, //pause
  tiltClockwise: {callback:gesto('rotacaoDireita')}, //time+
  tiltConterclockwise : {callback: gesto('rotacaoEsquerda')} //time-
});

// Irá receber os ids dos botoes, referente à ação que deve realizar;
var inclinarTras;
var inclinarFrente;
var inclinarDireita;
var inclinarEsquerda;
var rotacaoDireita;
var rotacaoEsquerda;


var msg = "a";


function gesto(){

  switch(arguments[0]){

    case 'inclinarTras':
      realizarAcao(inclinarTras);
      break;

    case 'inclinarFrente':
      realizarAcao(inclinarFrente);
      break;

    case 'inclinarDireita':
      realizarAcao(inclinarDireita);
      break;

    case 'inclinarEsquerda':
      realizarAcao(inclinarEsquerda);
      break;

    case 'rotacaoDireita':
      realizarAcao(rotacaoDireita);
      break;

    case 'rotacaoEsquerda':
      realizarAcao(rotacaoEsquerda);
      break;
  }  
}

function realizarAcao(botao){
  document.getElementById(botao).click();
}

function configuracao(){

  var aux = 0;
  var mensagemConfig = ["inclinar para trás", "inclinar para frente", "inclinar para a esquerda",
                      "inclinar para a direita", "rotacionar para a esquerda", "rotacionar para a direita"];


  alert("Vamos configurar os botões de acordo com os gestos disponíveis!");
  alert("Selecione o botão referente ao gesto de " + mensagemConfig[aux]);

  $("button").on('click',function() { 
    var t = (this.id); 
    $('#GFG_DOWN').text("ID = " + t);
    inclinarTras = t;
    aux++;
    if(aux < 6){
      alert("Gesto configurado com sucesso. Pressione OK (ou ENTER) para prosseguir.")
      alert("Selecione o botão referente ao gesto de " + mensagemConfig[aux]);
    }
    
  });

  // Salvar configuração nos cookies;
  // Criar função que recupera informações do cookir;

  //alert("Gestos configurados com sucesso!");

}
