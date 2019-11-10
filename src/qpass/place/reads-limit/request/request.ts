import Body from "../../../../body/body";
import Path from "../../path/path";
import Read from "../../../../method/read";
import Limit from "../../../../limit/limit";

export default interface Request extends Body<Limit>, Path, Read {

}