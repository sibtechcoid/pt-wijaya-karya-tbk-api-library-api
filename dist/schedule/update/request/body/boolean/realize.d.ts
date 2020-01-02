import TypeInterface from "../body";
export default function Realize<Extended extends Omit<TypeInterface, 'plan'> = Omit<TypeInterface, 'plan'>>(value: any): value is Extended;
