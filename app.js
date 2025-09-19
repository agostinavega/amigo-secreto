// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// capturar el valor del campo de entrada
//validad la entrada, si esta vacio alerta "por favor inserte un nombre"
//si el nombre es valido almacenarlo
//limpiar el campo de entrada
function agregarAmigo () {
    const amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("mmmm")
    } else {
        amigos.push(amigo)
        document.getElementById("amigo").value = ""
    }
};
