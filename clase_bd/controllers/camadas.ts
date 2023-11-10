import { Request, Response } from "express";
import { ICamada } from "../models/camada";
import Camada from "../models/camada"
export const createCamada = async (req:Request, res:Response) =>{

    const camadaData: ICamada = req.body;


    const {diasDeCursada,modulo,nombre} = camadaData;

    const camada = new Camada(camadaData);

    await camada.save();

    res.json({

        msg:"Todo ok",
        camada
    })
    

}