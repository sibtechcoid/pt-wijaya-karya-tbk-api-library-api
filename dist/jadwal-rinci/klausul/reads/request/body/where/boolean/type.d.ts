import Where from "../where";
export default function Type<Extended extends Where = Where>(value: any): value is Extended;
