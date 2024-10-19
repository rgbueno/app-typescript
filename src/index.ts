/*type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    name: "bruce wayne",
    vulgo: "batman"
});*/

//tipos primitivos
let ligado: boolean = false;
let idade: number = 30;
let altura: number = 1.73;

//tipos especiais
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes
let retorno: void;
let retornoView: any;

//objeto
let produto: object = {nome: "Rodrigo", idade: 40};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Abacaxi",
    preco: 10.00,
    unidades: 20
}

let dados: string[] = ["Rodrigo", "Carol", "Nickolas", "Augusto"];
let dados2: Array<string> = ["Rodrigo", "Carol", "Nickolas", "Augusto"];

//array multi tipos
let infos: (string | number)[] = ["Rodrigo", 40];

// Tupla - tipos devem seguir ordem especificada
let boleto: [string, number, number] = ["Teste", 199, 50];

//data
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

function addNumber(x: number,y: number){
    return x + y;
}

let soma: number = addNumber(5, 4);

console.log(soma);

function addToHello(name: string){
    return `Hello ${name}`;
}

console.log(addToHello("Rodrigo"));

function callToPhone(phone: number | string): number | string{
    return phone;
}

console.log(callToPhone("154564654"));

async function getDatabase(id: number): Promise<string> {
    return "Rodrigo";
}

type robot = {
    id: number;
    name: string;
}

interface irobot {
    id: number;
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: "megaman"
}

//função chamada pelo decorator
function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Robo implements irobot{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `ola ${this.name}`;
    }
}

//adiciona propriedade dinamicamente ao objeto
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

function minLength(minLength: number){
    return (target:any, key:string) => {
        let _value = target[key]; 

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < minLength){
                throw new Error(`Tamanho menor que ${minLength}`);
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    };
}

@apiVersion("1.0")
class Api{
    @minLength(3)
    name: string;

    constructor(name: string){
        this.name = name;
    }

}

const api = new Api("us");
console.log(api.__version);
console.log(api.name);

const robo1 = new Robo(1, "Megaman");
console.log(robo1.sayHello());