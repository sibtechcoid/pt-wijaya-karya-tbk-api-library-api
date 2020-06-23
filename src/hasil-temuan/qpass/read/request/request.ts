import BaseBody from "../../../../body/body";
import Path from "../../create/request/path/path";
import Read from "../../../../method/read";
import Body from "./body/body";
import Id from "../../../../id/id";

export default interface Request extends BaseBody<Id>, Path, Read {

}
