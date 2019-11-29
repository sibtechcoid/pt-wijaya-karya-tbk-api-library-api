import Body from "../body";
export default function Typez<Extended extends Body = Body>(value: any): value is Extended;
