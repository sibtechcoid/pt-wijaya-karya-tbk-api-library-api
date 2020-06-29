import Hasil from "../hasil";
export default function Type<Extended extends Hasil = Hasil>(value: any): value is Extended;
