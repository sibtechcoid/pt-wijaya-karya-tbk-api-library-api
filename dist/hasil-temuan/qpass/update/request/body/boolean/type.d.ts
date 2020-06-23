import Body from "../body";
export default function Type<Extended extends Body = Body>(value: any): value is Extended;
