import Business from "../business";
import InternalType from "../../../../internal/place/type/create/request/data/boolean/type";

const Type : (value : any) => value is Business = InternalType;
export default Type;

