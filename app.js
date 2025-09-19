// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// capturar el valor del campo de entrada
//validad la entrada, si esta vacio alerta "por favor inserte un nombre"
//si el nombre es valido almacenarlo
//limpiar el campo de entrada
function generarListaAmigos () {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
       const li = document.createElement("li");
       li.textContent = amigos[index];
        ul.appendChild(li)
    }

}
function agregarAmigo () {
    const amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(amigo)
        document.getElementById("amigo").value = ""
        generarListaAmigos()
    }
};
