import TypeInterface from "../type";
export default function Typez<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
