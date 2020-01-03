import TypeInterface from "../body";
export default function Plan<Extended extends Omit<TypeInterface, 'realisasi'> = Omit<TypeInterface, 'realisasi'>>(value: any): value is Extended;
