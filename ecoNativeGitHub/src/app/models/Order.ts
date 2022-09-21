import { CartItem } from "./CartItem";

export class Order{
    id!:number;
    items!: CartItem[];
    totalPrice!:number;
    name!:string;
    email!:string;
    address!:string;
    paymentId!:string;
    createdAt!:string;
    status!:string;

}