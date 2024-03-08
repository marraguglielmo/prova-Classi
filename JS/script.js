import Pizza from './Pizza.js';
import {miePizze} from './db.js';


const margherita = new Pizza('margherita', ['mozzarella', 'pomodoro', 'basilico']);
console.log(margherita.nome); 
console.log(margherita.ingredienti); 

margherita.addIngredient('olio evo');
console.log(margherita.ingredienti); 

margherita.prezzo = 7;
console.log(margherita.prezzo); 
console.log(margherita.getPrezzoFixed()); 
console.log(margherita.getFullInfo()); 

const diavola = new Pizza('divaola', ['mozzarella', 'pomodoro', 'salame']);
diavola.prezzo = 8;
console.log(diavola.getFullInfo());

miePizze.forEach(pizzaEl =>{
    const {nome, prezzo, ingredienti} = pizzaEl;
    const newPizza = new Pizza(nome, ingredienti)
    newPizza.prezzo = prezzo;
    console.log(newPizza.getFullInfo());
    document.getElementById('output').innerHTML += `
        <li>${newPizza.getFullInfo()}</li>
    `
})