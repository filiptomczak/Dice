function throwDice(){

  var valPlayer1=Math.floor(Math.random()*6)+1;
  var imgPath1="img/"+valPlayer1+".png";

  document.getElementById("img-player1").setAttribute("src",imgPath1);

  var valPlayer2=Math.floor(Math.random()*6)+1;
  var imgPath2="img/"+valPlayer2+".png";
  document.getElementById("img-player2").setAttribute("src",imgPath2);

  var result;
  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  if(valPlayer1>valPlayer2){
    result=player1+" won!";
    document.getElementById("player1").classList.add("color-winner");
    document.getElementById("player2").classList.remove("color-winner");
    document.getElementById("player2").classList.remove("color-draw");
    document.getElementById("player1").classList.remove("color-draw");
  }else if(valPlayer1==valPlayer2){
    result="Draw!";
    document.getElementById("player2").classList.add("color-draw");
    document.getElementById("player1").classList.add("color-draw");
  }else{
    result=player2+" won!";
    document.getElementById("player2").classList.add("color-winner");
    document.getElementById("player1").classList.remove("color-winner");
    document.getElementById("player2").classList.remove("color-draw");
    document.getElementById("player1").classList.remove("color-draw");
  }
  document.querySelector("h1").textContent=result;

}
