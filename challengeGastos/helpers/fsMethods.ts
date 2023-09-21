import fs from "fs";
import { IBill } from "../interfaces/interfaces";

export const getBills = (file:string):Promise<IBill[]> =>{

    return new Promise((resolve,reject) =>{
        fs.readFile(file+ ".json","utf-8", (err,content) =>{
            if(err){
                reject(err)
                
            }
            else{
                resolve(JSON.parse(content))
            }
        })
    }) 
}

export const createBill = (file:string, content:IBill[]):Promise<void> =>{

    return new Promise((resolve,reject) =>{
        fs.writeFile(file + ".json",JSON.stringify(content),(err) =>{
            err ? reject(err) : resolve(console.log("Gasto añadido correctamente"))
        })
    })
}