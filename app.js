window.onload=function(){

var salida ="";
const cuerpo =document.querySelector(".cuerpo");
obtenUsuarios();

//FUNCION QUE SACA EL JSON LOS USUARIOS
async function obtenUsuarios(){
const response = await fetch("http://jsonplaceholder.typicode.com/users");
const usuarios = await response.json();
pintaUsuarios(usuarios);
    
}
//FUNCION QUE PINTA USUARIOS
function pintaUsuarios(argumentos){
        for (let usuario of argumentos) {
            var user = document.createElement("div");
            user.classList.add("user");
            user.innerHTML=`
        
            <h2 class="user__nombre">${usuario.name}</h2>
            <ul class="user__datos">
                <li class="datos__nombre">Name:${usuario.username}</li>
                <li class="datos__correo">Email: ${usuario.email}</li>
                <li class="datos__url">Url:${usuario.website}</li>
            </ul>
    
             `;
            var boton = document.createElement("button");
            boton.classList.add("user__boton");
            boton.textContent="Read more";
            user.appendChild(boton);
            cuerpo.appendChild(user)
        }
     
    }

}