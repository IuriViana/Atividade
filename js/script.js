var Lamp = document.getElementById("lamp");
var Redes = document.getElementsByClassName("redes")[0];
var Main = document.getElementsByTagName("main")[0];
var h1 = document.getElementsByTagName("h1")[0];
var para = document.querySelector("p.text");
var lateral = document.getElementById("Lateral");

function clicar(){
    if(Lamp.style.color == ""){
Lamp.style.color = "rgb(190, 190, 10)";
document.body.style.backgroundColor = "#575757";
Main.style.background = "rgb(197, 193, 193)";
lateral.style.backgroundColor = "#333333";
h1.style.color = "black";
para.style.color = "black";
    }
    else if(Lamp.style.color == "rgb(190, 190, 10)"){
Lamp.style.color = "";
document.body.style.backgroundColor = "";
Main.style.background = "";
lateral.style.backgroundColor = "";
h1.style.color = "";
para.style.color = "";
    }
}

function Discord(){
    if(Redes.style.padding == ""){
Redes.style.padding = "3px";
    }
    else if(Redes.style.padding == "3px"){
Redes.style.padding = "";
    }

}
