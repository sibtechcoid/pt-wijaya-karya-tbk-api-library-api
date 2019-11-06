import LevelInterface from "../level";
import InternalType from "../../../../internal/place/type/boolean/type";

interface Function {
    <Id extends number>(value : any, id : true) : value is LevelInterface<number>;
    <Id extends undefined>(value : any, id : false) : value is LevelInterface<undefined>;
}

const Type : Function = InternalType;
export default Type;

