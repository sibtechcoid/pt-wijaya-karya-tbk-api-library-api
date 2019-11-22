import TypeInterface from "../position";
export default function Typez<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
