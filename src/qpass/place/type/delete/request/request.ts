import Body from "../../../../../body/body";
import Path from "../../path/path";
import Create from "../../../../../method/create";
import Id from "../../../../../id/id";

export default interface Request extends Body<Id[]>, Path, Create {

}