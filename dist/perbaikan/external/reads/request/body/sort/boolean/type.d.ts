import Sort from "../sort";
export default function Type<Extended extends Sort = Sort>(value: any): value is Extended;
