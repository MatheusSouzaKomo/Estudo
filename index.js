

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

const adicionar = document.getElementById("myButton");
const input = document.getElementById("myInput");
const remover = document.getElementById("myButton2");
const lista = document.getElementById()


adicionar.addEventListener("click", function() {
    let texto = input.value;
        if (texto !== "") {
            let item = document.createElement("li");
            item.textContent = texto;
            document.getElementById("myList").appendChild(item);
            document.getElementById("input").value = "";
        } else {
            window.alert("Por favor, digite um nome!");
        }
    });

remover.addEventListener("click", function() {
    
});