import Data from "../data";
export default function Type<Extended extends Data = Data>(value: any): value is Extended;
