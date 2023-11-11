import Usuario, { IUser } from "../models/usuario"

export const anEmailExist= async (email:string): Promise<void> =>{

    const anEmailExist:IUser | null = await Usuario.findOne({email});

    if(anEmailExist){
        throw new Error (`El correo ${email} ya está registrado`)
    }
}