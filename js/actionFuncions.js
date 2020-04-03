window.focus();   
var mytat = new tiltandtap({
  tiltLeft :  {callback:gesto('inclinarEsquerda')}, //volume-
  tiltRight : {callback:gesto('inclinarDireita')}, //volume+
  tiltUp :    {callback:gesto('inclinarTras')}, //play
  tiltDown:   {callback:gesto('inclinarFrente')}, //pause
  tiltClockwise: {callback:gesto('rotacaoDireita')}, //time+
  tiltConterclockwise : {callback: gesto('rotacaoEsquerda')} //time-
});


//var inclinarTras = {gesto: "inclinarTras", funcao: pause()};
var inclinarTras = 'play'
var inclinarFrente = 'pause';
var inclinarDireita = 'volumeMais';
var inclinarEsquerda = 'volumeMenos';
var rotacaoDireita = 'avancar';
var rotacaoEsquerda = 'retroceder';

//var gestos = [gesto:'play', gesto:'pause', gesto:'volumeMais', gesto:'volumeMenos', gesto:'avancar', gesto:'retroceder'];

function gesto(){

  switch(arguments[0]){

    case 'inclinarTras':
      play();
      break;

    case 'inclinarFrente':
      pause();
      break;

    case 'inclinarDireita':
      volumeMais();
      break;

    case 'inclinarEsquerda':
      volumeMenos();
      break;

    case 'rotacaoDireita':
      avancar();
      break;

    case 'rotacaoEsquerda':
      retroceder();
      break;

  }
  
}


function play(){
 //Play function
  if(player.pause){
    player.play();
  }
 //feedback
  audioPlay(); //audivel
  blinkPlay(); //visual
  window.navigator.vibrate(50); //tátil
  document.getElementById("result").innerHTML = "cima"; //visual
  console.log("cima"); //log   
}


function pause(){
 //Pause function
  if(player.play){
     player.pause();
  }
 //feedback
  audioPause(); //audivel
  blinkPause(); //visual
  window.navigator.vibrate(50); //tátil
  document.getElementById("result").innerHTML = "baixo"; //visual
  console.log("baixo"); //log
}


function volumeMais(){
 //Audio function
  setVolume(.1) //up by 10%
 //feedback
  audioMaisVolume(); //audivel
  blinkMaisVolume(); //visual
  window.navigator.vibrate(50); //tátil
  document.getElementById("result").innerHTML = "direita"; //visual
  console.log("direita"); //log     
}


function volumeMenos(){
 //Audio function
  setVolume(-.1); //down by 10%
 //feedback
  audioMenosVolume(); //audivel
  blinkMenosVolume(); //visual
  window.navigator.vibrate(50); //tátil
  document.getElementById("result").innerHTML = "esquerda"; //visual
  console.log("esquerda"); //log     
}


function avancar(){
 //Time function
  setTime(10);
 //feedback
  audioAvancar(); //audivel
  blinkAvancar(); //visual
  window.navigator.vibrate(50); //tátil
  document.getElementById("result").innerHTML = "horário"; //visual
  console.log("horário"); //log
}


function retroceder(){
 //Time function
  setTime(-10);
 //feedback
  audioRetroceder(); //audivel
  blinkRetroceder(); //visual
  window.navigator.vibrate(50); //tátil
  document.getElementById("result").innerHTML = "anti-horário"; //visual
  console.log("anti-horário"); //log        
}

function teste(){
  audioRetroceder();
  audioPlay();
  audioMenosVolume();
  audioAvancar();
  audioPause();
  audioMaisVolume();
}