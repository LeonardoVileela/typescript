/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
};

const arrayFunction = (a:number, b:number) => {
    return a + b;
};

const resultado = sumar(10,20);

//Os últimos argumentos podem ser opcionais ou constantes, para ser opcional é só colocar um ?
function multtiplicar( numero: number, otroNumero?:number, base:number = 2 ){
    return numero*base;
};

const resultado2 = multtiplicar(5,0,10);


interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR,  curarX: number): void{
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR ={
    nombre: 'Sttrider',
    pv: 50,
    mostrarHp() {
        console.log((this.pv))
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();