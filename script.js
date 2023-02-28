function thumbChange(num){
    var thumb = 'imagen' + num + '.jpg';
    document.getElementById("mainImg").src = thumb;
}

var imgAtual = "imagen0.jpg";
var imgseguinte1 = "imagen1.jpg";
var imgseguinte2 = "imagen2.jpg";
var imgseguinte3 = "imagen3.jpg";

function trocar(){
    document.getElementById("mainImg").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgseguinte1;
    imgseguinte1 = imgseguinte2;
    imgseguinte2 = imgseguinte3;
    imgseguinte3 = aux;
}

function passar(){
    document.getElementById("mainImg").src = imgAtual;
    let aux = imgseguinte3;
    imgseguinte3 = imgseguinte2;
    imgseguinte2 = imgseguinte1;
    imgseguinte1 = imgAtual;
    imgAtual = aux;
   
}

