import Id from "../../../../../../id/id";
interface Optional {
    id?: number;
}
export default function Type<Extension extends Optional = Optional>(value: any): value is Omit<Extension, 'id'> & Id;
export {};
