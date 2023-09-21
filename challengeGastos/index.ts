import inquirer from "inquirer";
import { billIndex, createNewBill, getAllBills, totalIn, totalOut } from "./helpers/listOptions";


const main = async () =>{


    let run = true;
    //  while (run) {
        const action = await inquirer.prompt([
            {
                type:"list",
                name:"listOptions",
                message:"Seleccione que desea hacer",
                choices:[
                    {
                        value:1,
                        name:"Leer gastos"
                    },
                    {
                        value:2,
                        name:"Ingresar gastos"
                    },
                    {
                        value:3,
                        name:"Mostrar total de ingresos"
                    },
                    {
                        value:4,
                        name:"Mostrar total de egresos"
                    },
                    {
                        value:5,
                        name:"Mostrar ganancias o perdidas"
                    },
                    {
                        value:99,
                        name:"Salir"
                    },
                ]
    
            }
        ])
    
        switch (action.listOptions) {
            case 1:
                //Todo logica cuando se queire leer


                getAllBills();
                break;
            case 2:
                //Todo logica para ingresar
                createNewBill();
    
                break;

            case 3:
                totalIn()
                break;
            case 4:
                totalOut()
                break;
            case 5:
                billIndex();
                break;
            case 99:
                //Todo Logica para salir
                console.log("Gracias por usar el programa")
                run = false;
                break;
        
            default:
                console.log("Salir")
                break;
        }
        
    //  }
   
} 

main()