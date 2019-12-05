import Id from "../id";
interface Optional {
    id?: number;
}
export default function Type<Extension extends Optional = Optional>(value: any): value is Omit<Extension, 'id'> & Id;
export {};
