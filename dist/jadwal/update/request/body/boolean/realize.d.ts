import TypeInterface from "../body";
export default function Realize<Extended extends Omit<TypeInterface, 'rencana'> = Omit<TypeInterface, 'rencana'>>(value: any): value is Extended;
