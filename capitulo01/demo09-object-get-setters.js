const pessoa = {
    _nome: '',
    _idade: 20,

    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },
    get podeDirigir() {
        return this._idade > 18
    },
    set idade(valor) {
        this._idade = valor
    }

}

pessoa.nome = 'Igor Silva';
pessoa.idade = 16;
console.log(pessoa.nome);
console.log(pessoa.podeDirigir);
console.log(pessoa.idade);


animal = {_idade: '123', set idade(valor) {this._idade = valor } }
animal.idade = 10
console.log(animal.idade);

animal = {_id: '123', get id() {return this._id } }
console.log(animal.id)