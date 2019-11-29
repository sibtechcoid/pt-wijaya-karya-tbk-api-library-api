import Name from "../name";
export default function Type<Extended extends Name = Name>(value: any): value is Extended;
