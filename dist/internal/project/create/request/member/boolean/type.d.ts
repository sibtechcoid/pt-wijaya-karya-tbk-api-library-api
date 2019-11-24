import Member from "../member";
export default function Type<Extended extends Member = Member>(value: any): value is Extended;
