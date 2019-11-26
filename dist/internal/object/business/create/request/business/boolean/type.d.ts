import TypeInterface from "../business";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
