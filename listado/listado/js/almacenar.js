let items =JSON.parse(localStorage.getItem("items"));
const container = document.getElementById("contenedor");
if(!!items){
    for(let item of items) {
        container.innerHTML += `<li>` + item + `</li>`;
    }
}



document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("agregar").addEventListener("click", function(){
        let item = document.getElementById("item").value;
        let cont = document.getElementById("contenedor");
        cont.innerHTML += `<li>` + item + `</li>`;
        let items = [item];
        if(!localStorage.getItem("items"))
            localStorage.setItem("items",JSON.stringify(items));
        else 
            localStorage.setItem("items",JSON.stringify(JSON.parse(localStorage.getItem("items")).concat(items)));

    });

    
    document.getElementById("limpiar").addEventListener("click", function(){
        localStorage.removeItem("items");
        let cont = document.getElementById("contenedor").innerHTML = "";

    });

});

