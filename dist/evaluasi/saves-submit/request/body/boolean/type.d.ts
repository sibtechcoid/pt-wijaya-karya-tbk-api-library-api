import Where from "../../../../saves/request/body/body";
export default function Type<Extended extends Where = Where>(value: any): value is Extended;
