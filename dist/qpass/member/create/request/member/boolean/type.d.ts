import TypeInterface from "../member";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
