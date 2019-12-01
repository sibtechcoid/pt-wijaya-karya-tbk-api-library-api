import Level from "../level/level";
import LevelType from "../../../../level/read/response/type/type";

export default interface Type extends LevelType {

    levels : null|Level[]
}