import { WhereInterface } from "../body";
export default function Where<Extended extends WhereInterface = WhereInterface>(value: any): value is Extended;
