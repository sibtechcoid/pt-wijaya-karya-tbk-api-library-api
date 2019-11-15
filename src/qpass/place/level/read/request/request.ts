import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Limit from "../../../../../limit/limit";
import Read from "../../../../../method/read";

export default interface Request extends Body<undefined>, Path, Read {

}