import TypeInterface from "../body";
export default function Plan<Extended extends Omit<TypeInterface, 'realize'> = Omit<TypeInterface, 'realize'>>(value: any): value is Extended;
