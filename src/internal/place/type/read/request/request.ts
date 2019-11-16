import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Read from "../../../../../method/read";
import Deactivated from "../../../../../deactivated/deactivated";

export default interface Request extends Body<Deactivated>, Path, Read {

}