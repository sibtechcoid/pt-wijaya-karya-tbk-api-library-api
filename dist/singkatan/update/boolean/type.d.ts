import Singkatan from "../singkatan";
export default function Type<Extended extends Singkatan = Singkatan>(value: any): value is Extended;
