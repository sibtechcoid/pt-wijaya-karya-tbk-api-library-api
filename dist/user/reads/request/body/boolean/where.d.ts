import { Where } from "../body";
export default function Where<Extended extends Where = Where>(value: any): value is Extended;
