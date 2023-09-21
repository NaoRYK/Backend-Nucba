import inquirer from "inquirer"
import { IBill } from "../interfaces/interfaces"


export const newBillPrompt = async():Promise<IBill> =>{

    return await inquirer.prompt([
        {
            type:"list",
            name:"billType",
            message:"Seleccione si es ingreso o egreso de dinero",
            choices:[
                {
                    name:"Ingreso",
                    value:"in"

                },
                {
                    name:"Egreso",
                    value:"out"

                },
            ]

        },
        {
            type:"number",
            name:"billAmount",
            message:"Ingresar cantidad de dinero"
        }
    ])

}