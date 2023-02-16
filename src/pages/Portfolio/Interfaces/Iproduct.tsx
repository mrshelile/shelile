import  Iinformation  from "./Iinformation";

export default interface Iproduct{
    name: string,
    image: string,
    created: number,
    information:Iinformation[]
}