import LevelType from "../../../../../qpass/place/level/read/response/type/type";
import Access from "../../../../access/update/request/access/access";
export default interface Type extends LevelType {
    access: Access;
}
