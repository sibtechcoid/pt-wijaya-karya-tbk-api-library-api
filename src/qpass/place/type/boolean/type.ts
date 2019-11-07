import TypeInterface from "../type";
import InternalType from "../../../../internal/place/type/boolean/type";

interface Function {
    (value : any) : value is TypeInterface;
}

const Type : Function = InternalType;
export default Type;

