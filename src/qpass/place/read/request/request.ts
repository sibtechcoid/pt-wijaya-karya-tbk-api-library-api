import Body from "../../../../body/body";
import Path from "../../create/request/path/path";
import Read from "../../../../method/read";
import Deactivate from "../../../../deactivate/deactivate";

export default interface Request extends Body<Deactivate>, Path, Read {

}