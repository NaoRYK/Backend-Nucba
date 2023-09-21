import inquirer from "inquirer";
import { createNewUser, getAllUsers } from "./helpers/listOptions";

const main = async () => {
  let run = true;

  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosenItem",
        message: "Seleccione una accion:",
        choices: [
          {
            value: 1,
            name: "Ver todos los usuarios",
          },
          {
            value: 2,
            name: "Registrar nuevo usuario",
          },
          {
            value: 99,
            name: "Salir del programa",
          },
        ],
      },
    ]);

    switch (action.chosenItem) {
      case 1:
        await getAllUsers();
        break;
      case 2:
        await createNewUser();
        break;

      case 99:
        console.log("Elegiste salir");
        run = false;
        break;

      default:
        console.log("Defalut");
        run = false;
        break;
    }
  }
};

main();

// const main = async () => {
//   const answers = await inquirer.prompt([
//     {
//         type:"string",
//         name: "nombre",
//         message: "Ingresa tu nombre"
//     },
//     {
//         type:"string",
//         name: "apellido",
//         message: "Ingresa tu apellido"
//     }
// ]);

// console.log(answers.nombre, answers.apellido)
// };

// main()
