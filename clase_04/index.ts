const sumar = (a:number,b:number):number =>{

    return a + b;
}

console.log(sumar(5,8));

// const objeto = {
//     nombre: "Juan",
//     saludar: () =>{
//         console.log(`Hola! soy ${this.nombre}` );
        
//     }
// }

// objeto.saludar();

function obtenerPrimerElemento<T>(array:T[] ):T{

        return array[0]


}

const numeros:number[] = [1,2,3,4,5,6,7,8,9]

const nombres:string[] = ["jose","puto"]

console.log(obtenerPrimerElemento(numeros));
console.log(obtenerPrimerElemento(nombres));

type Coordenadas = {
    x:number;
    y:number;
}

type Color = 'rojo' | "verde" | "azul";

type Punto = Coordenadas & {
    color:Color
};

const punto: Punto = {
    x:10,
    y:20,
    color:"rojo"
}