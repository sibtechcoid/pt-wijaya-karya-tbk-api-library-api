import TypeInterface from "../body";
export default function Type<Extended extends Omit<TypeInterface, 'rencana'> = Omit<TypeInterface, 'rencana'>>(value: any): value is Extended;
