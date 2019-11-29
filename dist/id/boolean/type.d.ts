import Id from "../id";
export default function Type<Extension extends Id = Id>(value: any): value is Extension;
