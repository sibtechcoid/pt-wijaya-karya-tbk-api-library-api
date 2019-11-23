import TypeInterface from "../user";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
