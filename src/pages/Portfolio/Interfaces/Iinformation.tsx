export default interface Iinformation{
    category: Icategory,
    url: string,
    client: string,
    due:string,
    description: string,
    
}
interface Icategory{
    name: string,
    key:string
}