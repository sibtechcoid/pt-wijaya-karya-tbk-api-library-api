import Body from "../body";
export default function Type<Extension extends Body = Body>(value: any): value is Extension;
