import jwt from "jsonwebtoken";

interface IObjetoAGuardar{
    id: number,
    username:string,
    isAdmin:boolean,
}

const objetoAGuardar = {
    id: 123,
    username:"LionelMessi",
    isAdmin:true,
}


const clave= "74nucbaneta"
const tokenFirmado = jwt.sign(objetoAGuardar,clave);
const tokenFirmadoExpiracion = jwt.sign(objetoAGuardar,clave,{
    expiresIn:"2m"
});


// console.log(tokenFirmado)
// console.log(tokenFirmadoExpiracion)


const generarJWT = (dataAGuardar:IObjetoAGuardar) =>{
    return new Promise((res,rej)=>{
       jwt.sign(dataAGuardar,clave,{
            expiresIn:"2m"
        }, (err,token) =>{
            err ?  rej("Se rompio Todo") : res(token);
            
        });
    })
}


(async () =>{
    const respuesta =await generarJWT(objetoAGuardar);
    console.log(respuesta);
    
})()

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6Ikxpb25lbE1lc3NpIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjk4MDI0MDQ2LCJleHAiOjE2OTgxNDQwNDZ9.I9hBivv9PkRMiB7hHLLC3875u5DSrjFTOaS73Y2oZTA";

const dataVerificada = jwt.verify(token,clave)

// console.log(dataVerificada);


import bcryptjs from "bcryptjs";


const contraseñaAEnctriptar = "Micontraseñasupersegura";

const contraseñaEnctripada= bcryptjs.hashSync(contraseñaAEnctriptar);

console.log("cONTRASE{A ENCRIPTADA");
console.log(contraseñaEnctripada);
