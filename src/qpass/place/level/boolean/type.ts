import Level from "../level";
import InternalType from "../../../../internal/place/type/boolean/type";

const Type : (value : any) => value is Level = InternalType;
export default Type;

