/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string // ? serve para que o tipo não seja obrigatoria
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: habilidades
};

personaje.puebloNatal = "Pueblo Paleta"
console.table(personaje);