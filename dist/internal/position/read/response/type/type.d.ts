import LevelType from "../../../../../qpass/place/level/read/response/type/type";
import Access from "../../../../position/create/request/access/access";
export default interface Type extends LevelType {
    access: Access[];
}
