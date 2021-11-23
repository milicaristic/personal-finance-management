import { Category } from "./Category";
export interface Transaction{
        id:number,
        beneficiaryName: string,
        date: string,
        direction: string,
        amount:number,
        description:string,
        currency: string,
        kind:string,
        category: Category,
        isselected:boolean;
}

