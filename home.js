/*
UP=1
RIGHT=2
DOWN=3
LEFT=4                                  
*/

var direction=2;
var inputs=true;


function constructor(s){
    /*var paragraph = document.createElement("p");
    var content = document.createTextNode(s);
    // Add Text node as child of the Element node
    document.getElementById("code").appendChild(content);
    document.body.appendChild(paragraph);*/
    if(inputs)
        document.getElementById('code').innerHTML += s+"<br>";

}

function changeDirection(actual_direction, w_direction){
    if (actual_direction < w_direction){
        for(let i=actual_direction; i<w_direction; i++)
            constructor("turnRight();")
        direction=w_direction;
        return 0;
    }
    for(let i=actual_direction; i>w_direction; i--)
        constructor("turnLeft();")
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
    } 
};

function copy(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("textarea");
    var code = document.getElementById(id_elemento).innerHTML + "}";
    var finalcode = "";
    let write = true;

    for(var i = 0; i<code.length; i++){
        if(code[i] == '<' && code[i+1] == 'b' && code[i+2] == 'r'){
            write = false;
            //finalcode += '<div>'; o \n
        }

        if(write)
            finalcode += code[i];

        if(code[i] == '>' && !write)
            write= true;

    }

    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", finalcode);

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
    document.body.removeChild(aux);

}

function copy2(id_elemento){

    alert(document.getElementById(id_elemento).innerHTML + "}");

    var aux = document.createElement("textarea");

    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML + "}");
    //aux.innerHTML += "}";  //no funciona

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
    document.body.removeChild(aux);

    alert("codigo copiado con exito!");
}

















