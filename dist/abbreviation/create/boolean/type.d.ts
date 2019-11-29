import Abbreviation from "../abbreviation";
export default function Type<Extended extends Abbreviation = Abbreviation>(value: any): value is Extended;
