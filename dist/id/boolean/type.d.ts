import { Required } from "utility-types";
export default function Type<Extension extends {
    id?: number;
} = {
    id?: number;
}>(value: any): value is Required<Extension, 'id'>;
