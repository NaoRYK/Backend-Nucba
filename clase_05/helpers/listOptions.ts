import { getWithFS, saveWithFS } from "./fsMethods"
import { newUserPrompt } from "./usersPrompts";

export const getAllUsers = async () => {
    const currentUsers = await getWithFS("users");

    console.log(currentUsers)
}

export const createNewUser = async () =>{

    const newUserData = await newUserPrompt();

    const currentUsers = await getWithFS("users");
    
    currentUsers.push(newUserData); 

    saveWithFS("users",currentUsers)

    
}
