import Create from "../../../create/request/body/body";
import Update from "../../../update/request/body/body";
declare type Body = (Create | Update)[];
export default Body;