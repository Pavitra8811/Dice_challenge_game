var randomnumber1=Math.floor(Math.random()* 6)+1;
var randomDiceImage= "dice" + randomnumber1+ ".png";
var randomImageSource= "images/" + randomDiceImage;

 document.querySelector(".img1").setAttribute("src",randomImageSource);

 var randomnumber2=Math.floor(Math.random()* 6)+1;
 var randomDiceImage2= "dice" + randomnumber2+ ".png";
 var randomImageSource2= "images/" + randomDiceImage2;
 document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 win!";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 win!";
}

 

