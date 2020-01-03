import Nama from "../nama";
export default function Type<Extended extends Nama = Nama>(value: any): value is Extended;
