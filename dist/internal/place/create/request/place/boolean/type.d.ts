import TypeInterface from "../place";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
