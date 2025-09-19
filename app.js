let amigos = [];
function generarListaAmigos () {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
       const li = document.createElement("li");
       li.textContent = amigos[index];
        ul.appendChild(li)
    }

};
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
function sortearAmigo () {
    if (amigos.length <= 1) {
        alert("Deben ser al menos 2 amigos")
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const nombreAleatorio = amigos[indiceAleatorio];
        const ul = document.getElementById("resultado");
        ul.innerHTML = "";
        const li = document.createElement("li");
       li.textContent = nombreAleatorio;
        ul.appendChild(li)
    }
}