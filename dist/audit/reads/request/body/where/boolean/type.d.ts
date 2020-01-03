import Where from "../where";
export default function Typez<Extended extends Where = Where>(value: any): value is Extended;
