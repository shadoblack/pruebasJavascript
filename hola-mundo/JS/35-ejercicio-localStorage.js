'use strict'

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit',()=>{
    var titulo = document.querySelector('#addPelicula').value
if(titulo.length>=1){
    localStorage.setItem(titulo,titulo)
}else{

}

});

var ul =document.querySelector('#peliculas-list');
for(let i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
};

var formulariob = document.querySelector("#formBorrarPeliculas");

formulario.addEventListener('submit',()=>{
    var titulo = document.querySelector('#borrarPelicula').value
if(titulo.length>=1){
    localStorage.removeItem(titulo);
}else{

}

});