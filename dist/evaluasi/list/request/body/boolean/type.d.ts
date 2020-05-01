import TypeInterface from "../../../../list/request/body/body";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
