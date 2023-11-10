import express, {Express} from "express";
import { connectDB } from "../database/config";
import stundentsRoutes from "../routes/students"
import camadaRoutes from "../routes/camada"
export class Server {

    app:Express;

    constructor(){
        this.app = express();
        this.conexionBD();

        this.middlewares();

        this.routes();
    }

    listen():void{
        this.app.listen(8080, () =>{
            console.log("Corriendo en puerto 8080")
        })
    }

    middlewares():void{
        this.app.use(express.json())
    }
    async conexionBD():Promise<void>{
        await connectDB();
    }

    routes():void{
        this.app.use("/students",stundentsRoutes);
        this.app.use("/camadas",camadaRoutes);
        
    }
}