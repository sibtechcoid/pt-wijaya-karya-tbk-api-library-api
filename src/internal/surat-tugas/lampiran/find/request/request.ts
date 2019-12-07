import BaseBody from "../../../../../body/body";
import Path from "./path/path";
import Read from "../../../../../method/read";
import Body from "../../../../../deactivate/read/request/body/body";
import Id from "../../../../../id/id";

export default interface Request extends BaseBody<Id>, Path, Read {

}