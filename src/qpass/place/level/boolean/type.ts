import LevelInterface from "../level";
import InternalType from "../../../../internal/place/type/boolean/type";

interface Function {
    (value : any) : value is LevelInterface;
}

const Type : Function = InternalType;
export default Type;

