import TypeInterface from "../type";
import InternalType from "../../../../internal/place/type/boolean/type";

const Type : (value : any) => value is TypeInterface = InternalType;
export default Type;

