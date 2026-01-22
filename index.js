/*
// window.alert("Hello World"); // Mensagem de alerta

document.getElementById("myH1").textContent = "Texto 1" // Altera os textos no id.
document.getElementById("myP").textContent = "Paragráfo 1" // Funciona pelo .textContent

let x; // Criação de variável 
x = 100; // Atribuição de valor a variável

let age = 22;
let FirstName = "Roberto";
let LastName = "Alváro";

console.log(`You are ${age} years old`); // Log no inspecionar. 
console.log(`Your first name is ${FirstName} and your last name is ${LastName}`);
*/

const adicionar = document.getElementById("myButton");
const input = document.getElementById("myInput");
const remover = document.getElementById("myButton2");
const contar = document.getElementById("myButton3");
const input2 = document.getElementById("myInput2");

adicionar.addEventListener("click", function() {
    let texto = input.value;
        if (texto !== "") {
            let item = document.createElement("li");
            let textoSpan = document.createElement("span")
            let deletar = document.createElement("button");
            let editar = document.createElement("button");
            textoSpan.textContent = texto;
            deletar.textContent = "X";
            editar.textContent = "Editar";
            
            deletar.addEventListener("click", function(){
                item.remove();
            });

            editar.addEventListener("click", function(){
                let novoTexto = prompt("Digite o novo valor:")
                if (novoTexto == "" || novoTexto === null){
                    window.alert("O item não foi alterado");
                }else {
                    textoSpan.textContent = novoTexto;
                }
            });
            item.appendChild(textoSpan);
            item.appendChild(deletar);
            item.appendChild(editar);
            document.getElementById("myList").appendChild(item);
            document.getElementById("input").value = "";
        } else {
            window.alert("Por favor, digite um nome!");
        } 
    });

contar.addEventListener("click", function(){
    let quantidade = document.querySelectorAll("#myList li").length;
    window.alert(`Você tem ${quantidade} comidas favoritas.`)
});

remover.addEventListener("click", function() {
    let quantidade = document.querySelectorAll("#myList li").length;
    let itens = document.querySelectorAll("#myList li");
 if (quantidade <= 0) {
    window.alert(`Você não tem comidas favoritas para serem removidas.`);
 } else {
    document.getElementById("myList").removeChild(itens[itens.length - 1]);
 }
});
