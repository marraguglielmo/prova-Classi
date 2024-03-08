export default class Pizza{

    constructor(_nome, _ingredienti){
        this.nome = _nome;
        this.ingredienti = _ingredienti;
        this._prezzo = null;
    }

    addIngredient(ingredientPlus){
        this.ingredienti.push(ingredientPlus);
    }

    set prezzo(nuovoPrezzo){
        if(isNaN(nuovoPrezzo)){
            alert('Inserire un numero');
            return
        }
        this._prezzo = nuovoPrezzo;
    }

    get prezzo(){
        return this._prezzo;
    }

    getPrezzoFixed(){
        return this._prezzo.toFixed(2);
    }

    getFullInfo(){
        return `
            nome: ${this.nome} prezzo: ${this.getPrezzoFixed()} ingredienti: ${this.ingredienti.join(' - ')}
        `
    }
    
}