import TypeInterface from "../type";
import InternalType from "../../../../internal/place/type/boolean/type";

interface Function {
    <Id extends number>(value : any, id : true) : value is TypeInterface<number>;
    <Id extends undefined>(value : any, id : false) : value is TypeInterface<undefined>;
}

const Type : Function = InternalType;
export default Type;

