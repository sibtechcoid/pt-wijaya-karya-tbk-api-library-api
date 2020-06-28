import Hasil from "../hasil";
export default function Typez<Extended extends Hasil = Hasil>(value: any): value is Extended;
