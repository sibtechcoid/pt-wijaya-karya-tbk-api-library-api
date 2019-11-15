import TypeInterface from "../data";
import InternalType from "../../../../../../../internal/place/type/create/request/data/boolean/type";

const Type : (value : any) => value is TypeInterface = InternalType;
export default Type;

