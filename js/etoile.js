
function randomPosition(){
    var x = Math.floor(Math.random() * 50);
    var positionX = x+"%";
    var y = Math.floor(Math.random() * 20);
    var positionY = y+"%";
    document.getElementById("night_shooting_star").style.left = positionX ;
    document.getElementById("night_shooting_star").style.top = positionY ;

}
var timer=setInterval("randomPosition()" , 9000);

