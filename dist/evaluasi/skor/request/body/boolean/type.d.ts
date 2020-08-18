import TypeInterface from "../../../../skor/request/body/body";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;
