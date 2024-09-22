// Você está trabalhando no desenvolvimento de um sistema para uma empresa que gerencia funcionários. Sua tarefa é implementar o código em JavaScript que modele essa situação, utilizando
// [x] classes
// [x] herança
// [x] exceções
// [x] elementos do DOM.
// [x] O código deve possuir as classes Funcionario, Gerente e Desenvolvedor, que representam diferentes tipos de funcionários. Cada classe possui atributos específicos e métodos para se apresentar, trabalhar e realizar tarefas relacionadas ao seu cargo. Fizemos esse código na prática 10, onde pedimos que fosse desenvolvido um código da seguinte forma:
// [x] Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.
// [x] Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional de linguagem, além do método programar().
// [x] Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.
// [x] Agora, seu objetivo é aprimorar o código, adicionando tratamento de exceções (usando try-catch) e interação com elementos do DOM.
// [x] Você precisa obter os valores preenchidos em um formulário HTML, que possui campos para nome, idade, cargo, departamento e linguagem de programação. Certifique-se de que todos os campos estão preenchidos corretamente antes de criar as instâncias das classes.
// [x] Após obter os valores dos campos do formulário, crie instâncias de um gerente e de um desenvolvedor, utilizando os valores preenchidos. Em seguida, chame os métodos apropriados para cada um dos funcionários e exiba as informações relevantes na página, como a apresentação do funcionário e as tarefas que ele realiza.
// [x] Caso ocorra algum erro durante a execução do código, trate as exceções usando a função exibirErro(), que exibirá uma mensagem de erro na página.
// [x] Lembre-se de testar o código, preencher todos os campos corretamente e também de testar situações em que os campos não estejam preenchidos ou contenham valores inválidos.

 
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`)
        return `Olá, me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando.`)
        return `${this.nome} está trabalhando.`
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gerenciar() {
        console.log(`${this.nome} gerencia o departamento de ${this.departamento}.`)
        return `${this.nome} gerencia o departamento de ${this.departamento}.`
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    }
    programar() {
        console.log(`${this.nome} programa na linguagem ${this.linguagem}.`)
        return `${this.nome} programa na linguagem ${this.linguagem}.`
    }
}

const cargoSelect = document.getElementById('cargo');
const campoExtra = document.getElementById('campoExtra');
const campoMensagem = document.getElementById('campoMensagem');

function exibirErro(mensagem) {
campoMensagem.innerHTML = `<p>Ocorreu um erro:<br> ${mensagem}</p>`
}

cargoSelect.addEventListener('change', () => {
var cargoSelecionado = cargoSelect.value;
console.log(`O cargo selecionado é: ${cargoSelecionado}`);
if (cargoSelecionado == '') {
    campoExtra.innerHTML = '<br>';
} else if (cargoSelecionado == 'gerente') {
    campoExtra.innerHTML = '<label>Departamento: </label>' + '<input type="text" id="departamento">'
} else {
    campoExtra.innerHTML = '<label>Linguagem: </label>' + '<input type="text" id="linguagem">'
}
})

const formularioDeCadastro = document.getElementById('formularioDeCadastro');

formularioDeCadastro.addEventListener('submit', evento => {
evento.preventDefault();

try {
    var nome = document.getElementById('campoNome').value;
    var idade = document.getElementById('campoIdade').value;
    var cargo = document.getElementById('cargo').value;

    let funcionario = '';
    if (cargo === 'gerente'){
        var departamento = document.getElementById('departamento').value;
        console.log(departamento)
        if (!departamento){
            throw new Error('É necessário preencher um departamento.')
        }
        funcionario = new Gerente(nome,idade,cargo,departamento)
        
        campoMensagem.innerHTML = `
        <h3>Funcionário cadastrado!</h3>
        <p>${funcionario.seApresentar()}</p>
        <p>${funcionario.gerenciar()}</p>
        <p>${funcionario.trabalhar()}</p>
        `

    } else if (cargo === 'desenvolvedor') {
        var linguagem = document.getElementById('linguagem').value;
        if (!linguagem){
            throw new Error('É necessário informar uma linguagem de programação.')
        }
        funcionario = new Desenvolvedor(nome,idade,cargo,linguagem);

        campoMensagem.innerHTML = `
        <h3>Funcionário cadastrado!</h3>
        <p>${funcionario.seApresentar()}</p>
        <p>${funcionario.programar()}</p>
        <p>${funcionario.trabalhar()}</p>
        `
        }
    }
catch (error) {
    exibirErro(error.message);
}
});