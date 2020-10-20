/*
UP=1
RIGHT=2
DOWN=3
LEFT=4
*/
var direction=2;

function constructor(s){
    /*var paragraph = document.createElement("p");
    var content = document.createTextNode(s);
    // Add Text node as child of the Element node
    document.getElementById("code").appendChild(content);
    document.body.appendChild(paragraph);*/
    document.getElementById('code').innerHTML += s+"<br>";

}

function changeDirection(actual_direction, w_direction){
    if (actual_direction < w_direction){
        for(let i=actual_direction; i<w_direction; i++)
            document.getElementById('code').innerHTML += "turnRight();"+"<br>";
        direction=w_direction;
        return 0;
    }
    for(let i=actual_direction; i>w_direction; i--)
        document.getElementById('code').innerHTML += "turnLeft();"+"<br>";
    direction=w_direction;
}

function up(){
    changeDirection(direction, 1);
    constructor("m();");
}

function right(){
    changeDirection(direction, 2);
    constructor("m();");
}

function down(){
    changeDirection(direction, 3);
    constructor("m();");
}
function left(){
    changeDirection(direction, 4);
    constructor("m();")
}

function teleport(){
    constructor("teleport();")
}

function custom(){
    constructor(document.getElementById("custom").value);
}

function chooseDirection(){
    direction=parseInt(prompt("Insert a direction"));
}

var el_up = document.getElementById("GFG_UP"); 
var el_down = document.getElementById("GFG_DOWN"); 
  
function gfg_Run() { 
    el_down.innerHTML = str; 
} 
document.onkeydown = function(e) { 
    switch (e.keyCode) { 
        case 37: 
            left(); 
            break; 
        case 38: 
            up();
            break; 
        case 39: 
            right();
            break; 
        case 40: 
            down();
            break; 
        case 84:
            teleport();
            break;
        case 67:
            custom();
            break;
        } 
};