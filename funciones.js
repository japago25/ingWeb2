let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
    
    let x = $("td");
    x.click(presionClick);
    
    let a = $("#boton1");
    a.click(boton);
    
    let t = $("#titulo1");
    t.click(ptitulo1);
    
    let t2 = $("#titulo2");
    t2.click(ptitulo2);
}

function presionClick(){
    let x = $(this);
    x.css("background-color", "#0000ff");
}

function boton(){
    alert("se presiono este boton.......");
}

function ptitulo1(){
    let t = $("#titulo1");
    t.css("color","#ffff00");
    t.css("background-color","#ff0000");
    t.css("font-family","Arial");
    
}

function ptitulo2(){
    let t2 = $("#titulo2");
    t2.css("color","blue");
    t2.css("background-color","green");
    t2.css("font-family","Arial");
    
}