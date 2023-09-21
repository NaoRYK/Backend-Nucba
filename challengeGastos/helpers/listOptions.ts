import { newBillPrompt } from "./billsPrompt";
import { getBills, createBill } from "./fsMethods"


export const getAllBills = async () =>{
    const billsData = await getBills("gastos");
    console.log("Todos los gastos son:");
    console.log(billsData);
    
}


export const createNewBill = async () =>{

    const billPrompt = await newBillPrompt();

    const billsData = await getBills("gastos");

    billsData.push(billPrompt);

    createBill("gastos", billsData)


}

export const totalIn = async () =>{

    const billsData =await getBills("gastos");


    const filteredBills =   billsData.filter( i => i.billType === "in" )
    
    let totalInAmount:number = 0;
    filteredBills.map(i => {
        
    totalInAmount += i.billAmount;

    } )
    console.log(`El ingreso total es de ${totalInAmount}.`)

}

export const totalOut = async () =>{

    const billsData =await getBills("gastos");


    const filteredBills =   billsData.filter( i => i.billType === "out" )
    
    let totalInAmount:number = 0;
    filteredBills.map(i => {
        
    totalInAmount += i.billAmount;

    } )
    console.log(`El ingreso total es de ${totalInAmount}.`)

}

export const billIndex = async () =>{

    const billsData =await getBills("gastos");


    const filteredInBills =   billsData.filter( i => i.billType === "in" )
    
    let totalInAmount:number = 0;
    filteredInBills.map(i => {
        
    totalInAmount += i.billAmount;

    

    } )

    const filteredOutBills =   billsData.filter( i => i.billType === "out" )
    
    let totalOutAmount:number = 0;
    filteredOutBills.map(i => {
        
    totalOutAmount += i.billAmount;

    } )

    const billsDifference:number = totalInAmount - totalOutAmount;

    console.log(`Usted ha ${-billsDifference ? "Perdido" : "Ganado"} ${Math.abs(billsDifference)} pesos`);
    
}