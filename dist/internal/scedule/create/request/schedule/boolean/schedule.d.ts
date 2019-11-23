import TypeInterface from "../schedule";
export default function Schedule<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
